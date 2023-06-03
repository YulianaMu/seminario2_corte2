import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from"@angular/forms";
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-facturas',
  templateUrl: './registro-facturas.page.html',
  styleUrls: ['./registro-facturas.page.scss'],
})
export class RegistroFacturasPage implements OnInit {

  formularioFactura: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioFactura = this.fb.group({
      "id": new FormControl("",Validators.required),
      "fecha": new FormControl("",Validators.required),
      "articulo": new FormControl("",Validators.required),
      "subtotal": new FormControl("",Validators.required),
      "iva": new FormControl("",Validators.required),
      "descuento": new FormControl("",Validators.required),
      "total": new FormControl("",Validators.required)
    })
  }


  ngOnInit() {
  }

  async guardar(){

    var f = this.formularioFactura.value;

  if(this.formularioFactura.invalid){
    const alert = await this.alertController.create({
      header: '¡¡¡Alerta!!!',
      message: 'Llenar factura!',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }
var facturas = {
id: f.id,
fecha: f.fecha,
articulo: f.articulo,
subtotal: f.subtotal,
iva: f.iva,
descuento: f.descuento,
total: f.total
}

localStorage.setItem('facturas',JSON.stringify(facturas));

const alert = await this.alertController.create({
header: '¡¡¡registro Exitoso!!!',
message: 'Factura registrada con exito!',
buttons: ['OK']
});

await alert.present();
return;
}

}

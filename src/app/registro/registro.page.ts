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
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      "nombre": new FormControl("",Validators.required),
       "usuario": new FormControl("",Validators.required),
       "password": new FormControl("",Validators.required),
       "confirmacionPassword": new FormControl("",Validators.required)
    })
  }
  ngOnInit() {
  }

    async guardar(){

      var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: '¡¡¡Alerta!!!',
        message: 'Por favor, llenar todos los datos!',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
var usuarios = {
  nombre: f.nombre,
  usuario: f.usuario,
  password: f.password
}

localStorage.setItem('usuarios',JSON.stringify(usuarios));

const alert = await this.alertController.create({
  header: '¡¡¡registro Exitoso!!!',
  message: 'su usuario y contraseña han sido creados!',
  buttons: ['OK']
});

await alert.present();
this.navCtrl.navigateRoot('home')
return;


  }

}

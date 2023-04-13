import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  async register(user: User) {
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      await loader.present();
      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data => {
          console.log(data);
          // Guardar el resto de los datos del usuario en una base de datos o en una variable en tu aplicación
          this.navCtrl.navigateRoot("login/login");
        })
      } catch (e: any) {
        e.message = "Error al registrarse";
        let errormessage = e.message || e.getLocalizedMessaje();

        this.showToast(errormessage);
      }
      await loader.dismiss();
    }
  }

  formValidation() {
    if (!this.user.nombre) {
      this.showToast("Ingrese tu Nombre");
      return false;
    }
    if (!this.user.apellidos) {
      this.showToast("Ingrese tus Apellidos");
      return false;
    }
    if (!this.user.documento) {
      this.showToast("Ingrese tu Documento");
      return false;
    }
    if (!this.user.email) {
      this.showToast("Ingrese tu Email");
      return false;
    }
    if (!this.user.password) {
      this.showToast("Ingrese tu Contraseña");
      return false;
    }
    return true;
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 4000
    }).then(toastData => toastData.present());
  }
}

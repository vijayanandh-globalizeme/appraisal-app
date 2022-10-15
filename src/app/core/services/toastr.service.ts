import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class ToastrService {
  constructor(public toastController: ToastController) {}

  async basic(message, type = "success") {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: type,
      buttons: [
        {
          text: "Done",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    toast.present();
  }
}

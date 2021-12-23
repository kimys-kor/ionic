import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public static filterValue;

  constructor(public alertController: AlertController) {}
//필터양 알람
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '필터를 교환해 주세요.',
      message: '필터가 10%남았습니다.',
      buttons: ['구매하기','정기배송 신청'],
    });
      await alert.present();
  }
//남은필터양 10% 이하일때 알람
  filter(){
    var filterValue = 98;
    console.log(filterValue);
    if(filterValue == 98 ){
      this.presentAlert();
    }
  }
}

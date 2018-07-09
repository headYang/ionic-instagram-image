import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Instagram } from '@ionic-native/instagram';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentImage = null;
  constructor(public navCtrl: NavController,
              private camera: Camera, 
              private instagram: Instagram ) {
  }

  loadImage() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then(data => {
      this.currentImage = 'data:image/jpeg;base64,' + data;
    });
  }

  shareImage() {
    this.instagram.share(this.currentImage, 'This was copied to my clipboard')
      .then(() => {
        
      }) 
  }

}

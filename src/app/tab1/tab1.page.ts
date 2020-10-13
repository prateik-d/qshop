import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOptions = {
    initialSlide: 0,
    speed: 400,
    loop:true
  };
  productOptions = {
    initialSlide: 0,
    slidesPerView: 3,
  };
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  constructor() {}
}

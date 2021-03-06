import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class dashboardPage {
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

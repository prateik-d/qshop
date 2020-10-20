import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HamepageService } from 'src/app/shared/hamepage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class dashboardPage {

  home_data: any;
  sliders: any;
  blogs: any;
  featured_categories: any;
  parent_categories: any;
  featured_products: any;
  latest_products: any;

  serverUrl = environment.baseUrl;

  private subscription: Subscription;

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

  constructor(
    private router: Router,
    private homepageService: HamepageService
) {
}
  ngOnInit() 
  {
  
      this.subscription = this.homepageService.get_data().subscribe((data) => {
          
            this.home_data = data.result;

            this.sliders = this.home_data.slider_items
            this.blogs = this.home_data.blogs
            this.featured_categories = this.home_data.featured_categories
            this.latest_products = this.home_data.latest_products

          console.log(this.home_data);
          
          // this.featured_product =['a', 'b'];
          
          // this.featured_products = [this.featured_categories[Math.floor(Math.random() * this.featured_categories.length)]];
          
          // console.log(this.featured_products);
      });
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}

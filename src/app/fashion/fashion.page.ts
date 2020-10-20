import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HamepageService } from 'src/app/shared/hamepage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fashion',
  templateUrl: 'fashion.page.html',
  styleUrls: ['fashion.page.scss']
})
export class fashionPage {

  home_data: any;
  sub_categories: any;

  id:number=5;

  serverUrl = environment.baseUrl;

  private subscription: Subscription;


  constructor(
    private homepageService: HamepageService
  ) 
  {
  }

  ngOnInit() 
  {
      this.subscription = this.homepageService.get_subcat_data(this.id).subscribe((data) => {
          
            this.home_data = data.result;

            this.sub_categories = this.home_data.subcategories
            
          console.log(this.home_data);
          console.log(this.sub_categories);
          
      });
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HamepageService } from 'src/app/shared/hamepage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-browse',
  templateUrl: 'browse.page.html',
  styleUrls: ['browse.page.scss']
})
export class browsePage {

  home_data: any;
  parent_categories: any;

  serverUrl = environment.baseUrl;

  private subscription: Subscription;


  constructor(
    private homepageService: HamepageService
  ) 
  {
  }

  ngOnInit() 
  {
  
      this.subscription = this.homepageService.get_data().subscribe((data) => {
          
            this.home_data = data.result;

            this.parent_categories = this.home_data.parent_categories
            
          console.log(this.home_data);
          // console.log(this.parent_categories);
          
      });
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}

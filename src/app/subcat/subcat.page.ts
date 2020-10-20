import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HamepageService } from 'src/app/shared/hamepage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.page.html',
  styleUrls: ['./subcat.page.scss'],
})
export class SubcatPage implements OnInit {


  


  home_data: any;
  sub_categories: any;

  id:any;

  serverUrl = environment.baseUrl;

  private subscription: Subscription;


  constructor(
    private homepageService: HamepageService,
    private route: ActivatedRoute,
  ) 
  {

    this.id = this.route.snapshot.paramMap.get("id");
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

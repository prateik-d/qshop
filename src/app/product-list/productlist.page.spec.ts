import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { productlistPage } from './productlist.page';

describe('productlistPage', () => {
  let component: productlistPage;
  let fixture: ComponentFixture<productlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [productlistPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(productlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

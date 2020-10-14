import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { browsePage } from './fashion.page';

describe('browsePage', () => {
  let component: browsePage;
  let fixture: ComponentFixture<browsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [browsePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(browsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

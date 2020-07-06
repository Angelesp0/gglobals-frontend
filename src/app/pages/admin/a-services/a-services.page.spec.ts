import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AServicesPage } from './a-services.page';

describe('AServicesPage', () => {
  let component: AServicesPage;
  let fixture: ComponentFixture<AServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

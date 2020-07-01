import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanydocumentsPage } from './companydocuments.page';

describe('CompanydocumentsPage', () => {
  let component: CompanydocumentsPage;
  let fixture: ComponentFixture<CompanydocumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanydocumentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanydocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

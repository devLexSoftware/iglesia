import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviaMisalPage } from './previa-misal.page';

describe('PreviaMisalPage', () => {
  let component: PreviaMisalPage;
  let fixture: ComponentFixture<PreviaMisalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviaMisalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviaMisalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

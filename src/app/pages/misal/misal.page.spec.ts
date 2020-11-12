import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisalPage } from './misal.page';

describe('MisalPage', () => {
  let component: MisalPage;
  let fixture: ComponentFixture<MisalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

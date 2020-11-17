import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChihuahuaPage } from './chihuahua.page';

describe('ChihuahuaPage', () => {
  let component: ChihuahuaPage;
  let fixture: ComponentFixture<ChihuahuaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChihuahuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChihuahuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

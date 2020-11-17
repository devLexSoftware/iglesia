import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PueblaPage } from './puebla.page';

describe('PueblaPage', () => {
  let component: PueblaPage;
  let fixture: ComponentFixture<PueblaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PueblaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PueblaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

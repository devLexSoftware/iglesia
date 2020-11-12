import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoLugarPage } from './nuevo-lugar.page';

describe('NuevoLugarPage', () => {
  let component: NuevoLugarPage;
  let fixture: ComponentFixture<NuevoLugarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoLugarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

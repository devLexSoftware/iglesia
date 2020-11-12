import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisasPage } from './misas.page';

describe('MisasPage', () => {
  let component: MisasPage;
  let fixture: ComponentFixture<MisasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

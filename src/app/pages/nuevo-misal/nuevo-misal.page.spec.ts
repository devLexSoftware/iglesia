import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoMisalPage } from './nuevo-misal.page';

describe('NuevoMisalPage', () => {
  let component: NuevoMisalPage;
  let fixture: ComponentFixture<NuevoMisalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoMisalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoMisalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

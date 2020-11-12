import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoTramitePage } from './nuevo-tramite.page';

describe('NuevoTramitePage', () => {
  let component: NuevoTramitePage;
  let fixture: ComponentFixture<NuevoTramitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTramitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoTramitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

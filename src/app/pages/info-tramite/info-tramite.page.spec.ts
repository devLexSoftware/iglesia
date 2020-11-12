import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoTramitePage } from './info-tramite.page';

describe('InfoTramitePage', () => {
  let component: InfoTramitePage;
  let fixture: ComponentFixture<InfoTramitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTramitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoTramitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

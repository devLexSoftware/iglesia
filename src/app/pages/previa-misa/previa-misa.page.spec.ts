import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviaMisaPage } from './previa-misa.page';

describe('PreviaMisaPage', () => {
  let component: PreviaMisaPage;
  let fixture: ComponentFixture<PreviaMisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviaMisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviaMisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharbelPage } from './charbel.page';

describe('CharbelPage', () => {
  let component: CharbelPage;
  let fixture: ComponentFixture<CharbelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharbelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharbelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

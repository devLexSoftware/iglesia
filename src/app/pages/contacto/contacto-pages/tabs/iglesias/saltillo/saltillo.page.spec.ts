import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaltilloPage } from './saltillo.page';

describe('SaltilloPage', () => {
  let component: SaltilloPage;
  let fixture: ComponentFixture<SaltilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltilloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaltilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

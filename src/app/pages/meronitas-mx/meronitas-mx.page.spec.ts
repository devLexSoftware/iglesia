import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeronitasMxPage } from './meronitas-mx.page';

describe('MeronitasMxPage', () => {
  let component: MeronitasMxPage;
  let fixture: ComponentFixture<MeronitasMxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeronitasMxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeronitasMxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

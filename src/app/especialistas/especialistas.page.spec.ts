import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspecialistasPage } from './especialistas.page';

describe('EspecialistasPage', () => {
  let component: EspecialistasPage;
  let fixture: ComponentFixture<EspecialistasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialistasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspecialistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicoencasaPage } from './medicoencasa.page';

describe('MedicoencasaPage', () => {
  let component: MedicoencasaPage;
  let fixture: ComponentFixture<MedicoencasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoencasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoencasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

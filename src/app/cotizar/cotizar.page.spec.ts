import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CotizarPage } from './cotizar.page';

describe('CotizarPage', () => {
  let component: CotizarPage;
  let fixture: ComponentFixture<CotizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CotizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

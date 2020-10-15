import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UbicacionFuentesPage } from './ubicacion-fuentes.page';

describe('UbicacionFuentesPage', () => {
  let component: UbicacionFuentesPage;
  let fixture: ComponentFixture<UbicacionFuentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionFuentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UbicacionFuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

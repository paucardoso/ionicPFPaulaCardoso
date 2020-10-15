import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuentesPage } from './fuentes.page';

describe('FuentesPage', () => {
  let component: FuentesPage;
  let fixture: ComponentFixture<FuentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

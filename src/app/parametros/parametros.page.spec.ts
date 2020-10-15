import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParametrosPage } from './parametros.page';

describe('ParametrosPage', () => {
  let component: ParametrosPage;
  let fixture: ComponentFixture<ParametrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

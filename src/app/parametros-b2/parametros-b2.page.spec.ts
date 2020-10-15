import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParametrosB2Page } from './parametros-b2.page';

describe('ParametrosB2Page', () => {
  let component: ParametrosB2Page;
  let fixture: ComponentFixture<ParametrosB2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosB2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametrosB2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlContComponent } from './ml-cont.component';

describe('MlContComponent', () => {
  let component: MlContComponent;
  let fixture: ComponentFixture<MlContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

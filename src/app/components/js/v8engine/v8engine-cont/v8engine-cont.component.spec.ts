import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V8engineContComponent } from './v8engine-cont.component';

describe('V8engineContComponent', () => {
  let component: V8engineContComponent;
  let fixture: ComponentFixture<V8engineContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V8engineContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V8engineContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

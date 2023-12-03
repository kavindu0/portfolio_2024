import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V8engineComponent } from './v8engine.component';

describe('V8engineComponent', () => {
  let component: V8engineComponent;
  let fixture: ComponentFixture<V8engineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V8engineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V8engineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

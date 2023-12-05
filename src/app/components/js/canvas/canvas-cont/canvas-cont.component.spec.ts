import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasContComponent } from './canvas-cont.component';

describe('CanvasContComponent', () => {
  let component: CanvasContComponent;
  let fixture: ComponentFixture<CanvasContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

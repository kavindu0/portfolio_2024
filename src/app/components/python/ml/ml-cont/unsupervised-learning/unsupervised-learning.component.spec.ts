import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupervisedLearningComponent } from './unsupervised-learning.component';

describe('UnsupervisedLearningComponent', () => {
  let component: UnsupervisedLearningComponent;
  let fixture: ComponentFixture<UnsupervisedLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsupervisedLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsupervisedLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

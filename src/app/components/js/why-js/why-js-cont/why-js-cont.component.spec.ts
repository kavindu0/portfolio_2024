import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJsContComponent } from './why-js-cont.component';

describe('WhyJsContComponent', () => {
  let component: WhyJsContComponent;
  let fixture: ComponentFixture<WhyJsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyJsContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyJsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

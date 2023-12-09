import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJsComponent } from './why-js.component';

describe('WhyJsComponent', () => {
  let component: WhyJsComponent;
  let fixture: ComponentFixture<WhyJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

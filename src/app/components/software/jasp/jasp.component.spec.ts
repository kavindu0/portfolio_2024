import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaspComponent } from './jasp.component';

describe('JaspComponent', () => {
  let component: JaspComponent;
  let fixture: ComponentFixture<JaspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

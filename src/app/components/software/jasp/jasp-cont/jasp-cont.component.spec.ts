import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaspContComponent } from './jasp-cont.component';

describe('JaspContComponent', () => {
  let component: JaspContComponent;
  let fixture: ComponentFixture<JaspContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaspContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaspContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

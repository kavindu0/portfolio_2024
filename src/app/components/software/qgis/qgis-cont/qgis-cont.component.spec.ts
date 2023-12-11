import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QgisContComponent } from './qgis-cont.component';

describe('QgisContComponent', () => {
  let component: QgisContComponent;
  let fixture: ComponentFixture<QgisContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QgisContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QgisContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

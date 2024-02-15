import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesContComponent } from './tables-cont.component';

describe('TablesContComponent', () => {
  let component: TablesContComponent;
  let fixture: ComponentFixture<TablesContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

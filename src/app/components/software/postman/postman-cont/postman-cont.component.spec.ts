import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmanContComponent } from './postman-cont.component';

describe('PostmanContComponent', () => {
  let component: PostmanContComponent;
  let fixture: ComponentFixture<PostmanContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostmanContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostmanContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

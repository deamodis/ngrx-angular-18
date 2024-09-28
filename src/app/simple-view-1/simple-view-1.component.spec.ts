import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleView1Component } from './simple-view-1.component';

describe('SimpleView1Component', () => {
  let component: SimpleView1Component;
  let fixture: ComponentFixture<SimpleView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleView1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

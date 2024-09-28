import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveViewerComponent } from './drive-viewer.component';

describe('DriveViewerComponent', () => {
  let component: DriveViewerComponent;
  let fixture: ComponentFixture<DriveViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriveViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotospageComponent } from './photospage.component';

describe('PhotospageComponent', () => {
  let component: PhotospageComponent;
  let fixture: ComponentFixture<PhotospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotospageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

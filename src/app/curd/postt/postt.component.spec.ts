import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttComponent } from './postt.component';

describe('PosttComponent', () => {
  let component: PosttComponent;
  let fixture: ComponentFixture<PosttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosttComponent]
    });
    fixture = TestBed.createComponent(PosttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

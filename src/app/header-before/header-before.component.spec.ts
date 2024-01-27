import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBeforeComponent } from './header-before.component';

describe('HeaderBeforeComponent', () => {
  let component: HeaderBeforeComponent;
  let fixture: ComponentFixture<HeaderBeforeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBeforeComponent]
    });
    fixture = TestBed.createComponent(HeaderBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

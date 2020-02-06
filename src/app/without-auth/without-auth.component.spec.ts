import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutAuthComponent } from './without-auth.component';

describe('WithoutAuthComponent', () => {
  let component: WithoutAuthComponent;
  let fixture: ComponentFixture<WithoutAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

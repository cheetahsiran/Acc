import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithAuthComponent } from './with-auth.component';

describe('WithAuthComponent', () => {
  let component: WithAuthComponent;
  let fixture: ComponentFixture<WithAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadulerComponent } from './schaduler.component';

describe('SchadulerComponent', () => {
  let component: SchadulerComponent;
  let fixture: ComponentFixture<SchadulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchadulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchadulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

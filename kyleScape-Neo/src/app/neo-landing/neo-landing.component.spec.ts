import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoLandingComponent } from './neo-landing.component';

describe('NeoLandingComponent', () => {
  let component: NeoLandingComponent;
  let fixture: ComponentFixture<NeoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

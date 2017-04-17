import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieDetailComponent } from './veggie-detail.component';

describe('VeggieDetailComponent', () => {
  let component: VeggieDetailComponent;
  let fixture: ComponentFixture<VeggieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeggieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeggieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

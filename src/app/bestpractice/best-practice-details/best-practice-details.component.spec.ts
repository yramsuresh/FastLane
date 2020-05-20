import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPracticeDetailsComponent } from './best-practice-details.component';

describe('BestPracticeDetailsComponent', () => {
  let component: BestPracticeDetailsComponent;
  let fixture: ComponentFixture<BestPracticeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPracticeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPracticeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

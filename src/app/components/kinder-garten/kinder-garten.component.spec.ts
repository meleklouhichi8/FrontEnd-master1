import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderGartenComponent } from './kinder-garten.component';

describe('KinderGartenComponent', () => {
  let component: KinderGartenComponent;
  let fixture: ComponentFixture<KinderGartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinderGartenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinderGartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

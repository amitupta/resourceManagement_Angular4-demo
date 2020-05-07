import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserByidComponent } from './getuser-byid.component';

describe('GetuserByidComponent', () => {
  let component: GetuserByidComponent;
  let fixture: ComponentFixture<GetuserByidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetuserByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetuserByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

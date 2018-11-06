import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsDemoComponent } from './basics-demo.component';

describe('BasicsDemoComponent', () => {
  let component: BasicsDemoComponent;
  let fixture: ComponentFixture<BasicsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

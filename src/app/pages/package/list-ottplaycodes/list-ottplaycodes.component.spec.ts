import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOttplaycodesComponent } from './list-ottplaycodes.component';

describe('ListOttplaycodesComponent', () => {
  let component: ListOttplaycodesComponent;
  let fixture: ComponentFixture<ListOttplaycodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOttplaycodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOttplaycodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

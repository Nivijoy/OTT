import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertOttplaycodesComponent } from './upsert-ottplaycodes.component';

describe('UpsertOttplaycodesComponent', () => {
  let component: UpsertOttplaycodesComponent;
  let fixture: ComponentFixture<UpsertOttplaycodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsertOttplaycodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertOttplaycodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

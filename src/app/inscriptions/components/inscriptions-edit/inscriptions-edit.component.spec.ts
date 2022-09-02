import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsEditComponent } from './inscriptions-edit.component';

describe('InscriptionsEditComponent', () => {
  let component: InscriptionsEditComponent;
  let fixture: ComponentFixture<InscriptionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

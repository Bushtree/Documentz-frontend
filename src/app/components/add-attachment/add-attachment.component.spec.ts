import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttachmentComponent } from './add-attachment.component';

describe('AddAttachmentComponent', () => {
  let component: AddAttachmentComponent;
  let fixture: ComponentFixture<AddAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
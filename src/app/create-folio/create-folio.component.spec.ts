import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFolioComponent } from './create-folio.component';

describe('CreateFolioComponent', () => {
  let component: CreateFolioComponent;
  let fixture: ComponentFixture<CreateFolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

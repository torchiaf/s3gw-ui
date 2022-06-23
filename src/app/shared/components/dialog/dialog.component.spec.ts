import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from '~/app/shared/components/components.module';
import { DialogComponent } from '~/app/shared/components/dialog/dialog.component';
import { CB_DIALOG_DATA } from '~/app/shared/services/dialog.service';
import { TestingModule } from '~/app/testing.module';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule, TestingModule],
      providers: [
        { provide: CB_DIALOG_DATA, useValue: {} },
        {
          provide: NgbActiveModal,
          useValue: {}
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

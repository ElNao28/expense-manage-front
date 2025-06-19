import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';
import { map } from 'rxjs';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dialog-register',
  standalone: false,
  templateUrl: './dialog-register.component.html',
  styleUrl: './dialog-register.component.css',
})
export class DialogRegisterComponent {
  constructor(
    private expenseService: ExpensesService,
    private confirmDialogService: ConfirmDialogService,
    private messageService: MessageService
  ) {}

  @Input()
  public isOpen: boolean = false;

  @Output()
  public closeDialogEvent = new EventEmitter<boolean>();

  public fb: FormBuilder = inject(FormBuilder);

  public registerForm: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
    purchaseDate: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  public closeDialog(): void {
    this.registerForm.reset();
    this.closeDialogEvent.emit(false);
  }

  public saveButtonAction(): void {
    if (this.registerForm.invalid) return;
    this.confirmDialogService.openConfirmDialog().confirm({
      accept: () => {
        this.saveRegister();
      },
    });
  }

  private saveRegister(): void {
    this.expenseService
      .createNewRegister(this.registerForm.value)
      .pipe(map((res) => res.data))
      .subscribe({
        next: (expense) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Se agrego el registro',
          });
          this.closeDialog();
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Ah ocurrido un error.',
          });
        },
      });
  }
}

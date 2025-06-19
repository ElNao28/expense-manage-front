import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dialog-register',
  standalone: false,
  templateUrl: './dialog-register.component.html',
  styleUrl: './dialog-register.component.css',
})
export class DialogRegisterComponent {
  constructor(private expenseService: ExpensesService) {}

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
    this.closeDialogEvent.emit(false);
  }

  public saveButtonAction(): void {
    if (this.registerForm.invalid) return;
    this.saveRegister();
  }

  private saveRegister(): void {
    this.expenseService
      .createNewRegister(this.registerForm.value)
      .pipe(map((res) => res.data))
      .subscribe({
        next: (expense) => {
          console.log(expense);
        },
        error: () => console.log,
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { map } from 'rxjs';
import { Expense } from '../../interfaces/Expense.interface';

@Component({
  selector: 'app-register-expenses',
  standalone: false,
  templateUrl: './register-expenses.component.html',
  styleUrl: './register-expenses.component.css',
})
export class RegisterExpensesComponent implements OnInit {
  constructor(private expenseService: ExpensesService) {}

  public isOpen: boolean = false;
  public expenses: Expense[] = [];

  ngOnInit(): void {
    this.getRegisters();
  }

  private getRegisters(): void {
    this.expenseService
      .getAllRegisterOfExpenses()
      .pipe(map((resp) => resp.data))
      .subscribe({
        next: (registers) => {
          this.expenses = registers;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  public closeDialogAction(event: boolean): void {
    this.isOpen = event;
    this.getRegisters();
  }
}

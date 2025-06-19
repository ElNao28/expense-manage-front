import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { History } from '../../interfaces/History.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  constructor(private expenseService: ExpensesService) {}

  public history: History[] = [];

  ngOnInit(): void {
    this.getHistory();
  }

  private getHistory(): void {
    this.expenseService
      .getHistory()
      .pipe(map((resp) => resp.data))
      .subscribe({
        next: (history) => (this.history = history),
        error: () => console.log,
      });
  }
}

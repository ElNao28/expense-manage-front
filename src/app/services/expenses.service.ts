import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CreateRegister } from '../interfaces/Create-register.interface';
import { Response } from '../interfaces/Response.interface';
import { Expense } from '../interfaces/Expense.interface';
import { Observable } from 'rxjs';
import { History } from '../interfaces/History.interface';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = environment.urlApi;

  public createNewRegister(
    newRegister: CreateRegister
  ): Observable<Response<Expense>> {
    return this.http.post<Response<Expense>>(
      `${this.apiUrl}expenses/create`,
      newRegister
    );
  }
  public getAllRegisterOfExpenses(): Observable<Response<Expense[]>> {
    return this.http.get<Response<Expense[]>>(`${this.apiUrl}expenses/list`);
  }

  public getHistory(): Observable<Response<History[]>> {
    return this.http.get<Response<History[]>>(`${this.apiUrl}history/list`);
  }
}

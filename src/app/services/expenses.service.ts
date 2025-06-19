import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CreateRegister } from '../interfaces/Create-register.interface';
import { Response } from '../interfaces/Response.interface';
import { Expense } from '../interfaces/Expense.interface';
import { Observable } from 'rxjs';

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
}

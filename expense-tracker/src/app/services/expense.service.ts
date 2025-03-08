import { Injectable, signal } from '@angular/core';
import { Expense } from '../models/expense.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  // Initialize Expense Signal 
  private expenseSignal = signal<Expense[]>([])

  // Constructor Injection HttpClient
  constructor(private http: HttpClient ) { }

  getExpenses(){
    this.http.get<Expense[]>('http://localhost:3000/expenses')
      .subscribe(expenses => this.expenseSignal.set(expenses));
  }

  get expenses(){
    return this.expenseSignal;
  }
}

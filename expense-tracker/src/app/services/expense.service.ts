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

  // CRUD Operations

  // Create Expense
  createExpense(expense: Expense){
    return this.http.post('http://localhost:3000/expenses', expense)
     .subscribe(() => this.getExpenses());
  }

  // Read Expenses
  getExpenses(){
    this.http.get<Expense[]>('http://localhost:3000/expenses')
      .subscribe(expenses => this.expenseSignal.set(expenses));
  }

  // Update Expense
  updateExpense(expense: Expense){
    return this.http.put(`http://localhost:3000/expenses/${expense.id}`, expense)
     .subscribe(() => this.getExpenses());
  }

  // Delete Expense
  deleteExpense(expenseId: number){
    return this.http.delete(`http://localhost:3000/expenses/${expenseId}`)
     .subscribe(() => this.getExpenses());
  }

  // Get Expense By Id
  getExpenseById(expenseId: number){
    return this.expenseSignal().find(expense => expense.id === expenseId);
  }

  get expenses(){
    return this.expenseSignal;
  }
}

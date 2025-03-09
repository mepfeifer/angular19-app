import { Routes } from '@angular/router';
import { ExpenseAddEditComponent } from './components/expense-add-edit/expense-add-edit.component';
import { ExpenseGridComponent } from './components/expense-grid/expense-grid.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';


export const routes: Routes = [
    { path: 'add-expense', component: ExpenseAddEditComponent},
    { path: 'dashboard', component: ExpenseGridComponent}, 
    { path: 'list', component: ExpenseListComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ];

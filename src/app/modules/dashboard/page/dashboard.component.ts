import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableComponent } from '../../../shared/components/table/table.component';
import EXPENSES from '../../../data/expenses.json'
import INCOMES from '../../../data/incomes.json'
import { Expense } from '../../expenses/models/expense';
import { Income } from '../../incomes/models/income';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  expenses: Expense[] = EXPENSES.expenses
  incomes: Income[] = INCOMES.incomes

  salary: number = 7000000;
  savings: number = 100000;
  date: Date = new Date()

}

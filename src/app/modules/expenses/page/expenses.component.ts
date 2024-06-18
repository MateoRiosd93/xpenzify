import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Expense } from '../models/expense';
import EXPENSES from '../../../data/expenses.json'
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  data: Expense[] = EXPENSES.expenses

  constructor() { }

  saveExpense() {
    console.log("entra")
  }
}

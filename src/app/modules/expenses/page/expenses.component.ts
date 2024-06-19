import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  categories: Category[] = [
    { label: 'gasto fijo', value: 'gasto fijo' },
    { label: 'hobby', value: 'hobby' },
    { label: 'natillera', value: 'natillera' },
    { label: 'prestamo', value: 'prestamo' },
  ]

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl(0, Validators.required),
    date: new FormControl<Date | null>(null, Validators.required),
    category: new FormControl<Category | null>(null, Validators.required),
  })

  constructor() { }
  saveExpense() {
    console.log(this.form?.value)
  }
}

interface Category {
  label: string,
  value: string
}

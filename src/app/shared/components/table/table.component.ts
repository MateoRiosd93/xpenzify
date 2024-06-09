import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Expense } from '../../../modules/expenses/models/expense';
import { Income } from '../../../modules/incomes/models/income';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() data: Expense[] | Income[] = []
}

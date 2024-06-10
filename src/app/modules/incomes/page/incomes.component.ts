import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Income } from '../models/income';
import INCOMES from '../../../data/incomes.json'

@Component({
  selector: 'app-incomes',
  standalone: true,
  imports: [TableModule, CalendarModule, DropdownModule, InputNumberModule, InputTextModule],
  templateUrl: './incomes.component.html',
  styleUrl: './incomes.component.css'
})
export class IncomesComponent {
  data: Income[] = INCOMES.incomes

  saveIncome() { }
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { DashboardIconComponent } from '../../../shared/components/icons/dashboard-icon/dashboard-icon.component';
import { ExpensesIconComponent } from '../../../shared/components/icons/expenses-icon/expenses-icon.component';
import { IncomesIconComponent } from '../../../shared/components/icons/incomes-icon/incomes-icon.component';
import { PocketsIconComponent } from '../../../shared/components/icons/pockets-icon/pockets-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    HeaderComponent, 
    DashboardIconComponent, 
    ExpensesIconComponent, 
    IncomesIconComponent, 
    PocketsIconComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
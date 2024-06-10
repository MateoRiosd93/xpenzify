import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardIconComponent } from '../../../../shared/components/icons/dashboard-icon/dashboard-icon.component';
import { ExpensesIconComponent } from '../../../../shared/components/icons/expenses-icon/expenses-icon.component';
import { IncomesIconComponent } from '../../../../shared/components/icons/incomes-icon/incomes-icon.component';
import { PocketsIconComponent } from '../../../../shared/components/icons/pockets-icon/pockets-icon.component';
import { SettingIconComponent } from '../../../../shared/components/icons/setting-icon/setting-icon.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DashboardIconComponent, ExpensesIconComponent, IncomesIconComponent, PocketsIconComponent, SettingIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home.component';
import { DashboardComponent } from '../dashboard/page/dashboard.component';
import { ExpensesComponent } from '../expenses/page/expenses.component';
import { IncomesComponent } from '../incomes/page/incomes.component';
import { PocketsComponent } from '../pockets/page/pockets.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
      },
      {
        path: 'incomes',
        component: IncomesComponent,
      },
      {
        path: 'pockets',
        component: PocketsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
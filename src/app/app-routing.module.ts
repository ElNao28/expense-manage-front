import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { RegisterExpensesComponent } from './pages/register-expenses/register-expenses.component';
import { RegisterCashComponent } from './pages/register-cash/register-cash.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
        title: 'Inicio',
      },
      {
        path: 'historial',
        component: HistoryComponent,
        title: 'Historial',
      },
      {
        path: 'registro',
        component: RegisterExpensesComponent,
        title: 'Registro',
      },
      {
        path: 'dinero',
        component: RegisterCashComponent,
        title: 'Dinero',
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

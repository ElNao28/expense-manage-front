import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { MainComponent } from './layouts/main/main.component';
import { RegisterExpensesComponent } from './pages/register-expenses/register-expenses.component';
import { RegisterCashComponent } from './pages/register-cash/register-cash.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    MainComponent,
    RegisterExpensesComponent,
    RegisterCashComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

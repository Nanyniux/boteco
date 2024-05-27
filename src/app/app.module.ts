import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { initializeApp } from "firebase/app";
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './components/adm/adm.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { TablesComponent } from './components/tables/tables.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { StockComponent } from './components/stock/stock.component';
import { ReportComponent } from './components/report/report.component';
import { InsertProductsComponent } from './components/insert-products/insert-products.component';
import { EditProductsComponent } from './modals/edit-products/edit-products.component';
import { UserRegistrationComponent } from './modals/user-registration/user-registration.component';
import { ViewProductsComponent } from './modals/view-products/view-products.component';
import { NewTableComponent } from './modals/new-table/new-table.component';
import { CloseAccountComponent } from './modals/close-account/close-account.component';

import { ConfirmationComponent } from './modals/confirmation/confirmation.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';




import { environment } from '../environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmComponent,
    WaiterComponent,
    KitchenComponent,
    TablesComponent,
    MenuCardComponent,
    StockComponent,
    ReportComponent,
    InsertProductsComponent,
    EditProductsComponent,
    UserRegistrationComponent,
    ViewProductsComponent,
    NewTableComponent,
    CloseAccountComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop'),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  app = initializeApp(environment.firebaseConfig);

}

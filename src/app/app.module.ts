import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

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
//
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { DataViewModule } from 'primeng/dataview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectButtonModule,
    ToggleButtonModule,
    PasswordModule,
    RadioButtonModule,
    SpeedDialModule,
    DataViewModule,
    ConfirmDialogModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync('noop')],
  bootstrap: [AppComponent],
})
export class AppModule {}

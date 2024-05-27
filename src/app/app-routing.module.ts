import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './components/adm/adm.component';
import { InsertProductsComponent } from './components/insert-products/insert-products.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { ReportComponent } from './components/report/report.component';
import { StockComponent } from './components/stock/stock.component';
import { TablesComponent } from './components/tables/tables.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { CloseAccountComponent } from './modals/close-account/close-account.component';
import { ConfirmationComponent } from './modals/confirmation/confirmation.component';
import { EditProductsComponent } from './modals/edit-products/edit-products.component';
import { NewTableComponent } from './modals/new-table/new-table.component';
import { UserRegistrationComponent } from './modals/user-registration/user-registration.component';
import { ViewProductsComponent } from './modals/view-products/view-products.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'insert-products', component: InsertProductsComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'menu-card', component: MenuCardComponent },
  { path: 'report', component: ReportComponent },
  { path: 'stock', component: StockComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'waiter', component: WaiterComponent },
  //Modals
  { path: 'close-accout', component: CloseAccountComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'edit-products', component: EditProductsComponent },
  { path: 'new-table', component: NewTableComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'view-products', component: ViewProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

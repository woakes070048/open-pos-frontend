import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import {CovalentCoreModule, CovalentDataTableModule} from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentSearchModule } from '@covalent/core';
import { TagInputModule } from 'ng2-tag-input';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/carts/carts.component';
import { ShopComponent } from './dashboard/shops/shops.component';

import { appRoutes, appRoutingProviders } from './app.routes';
import {Ng2PaginationModule} from 'ng2-pagination';


import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {HttpService} from "../services/http.service";
import {AuthService} from "../services/auth.service";
import {UsersService} from "../services/users.service";
import {RetailShopsService} from "../services/shop.service";
import {
  ItemsService, DistributorService, TagsService, TaxsService, BrandsService,
  SaltsService
} from "../services/items.service";
import {
  ProductSearchPipe, ProductBrandPipe, ProductDistributorPipe,
  ProductTagPipe, ProductSaltPipe, KeysPipe
} from '../pipes/product-search.pipe';
import {IndexDBServiceService} from "../services/indexdb.service";
import {CartService} from "../services/cart.service";
import {OrdersService} from "../services/orders.service";
import {BillingComponent} from "./billing/billing.component";
import {ProductInfoComponent} from "./billing/product-info/product-info.component";
import {CheckoutComponent} from "./billing/checkout/checkout.component";
import {ItemDiscountComponent} from "./billing/item-discount/item-discount.component";
import {ProductComponent} from "./inventory/product/product.component";
import {BrandComponent} from "./inventory/brand/brand.component";
import {TagComponent} from "./inventory/tag/tag.component";
import {SaltComponent} from "./inventory/salt/salt.component";
import {TaxComponent} from "./inventory/tax/tax.component";
import {DistributorComponent} from "./inventory/distributor/distributor.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {TableRowComponent} from "./inventory/table-row/table-row.component";
import {BackButtonComponent} from "./back-button/back-button.component";
import {GoBackDirective} from "../directives/go-back.directive";
import {MenuComponent} from "./inventory/menu/menu.component";
import {ProductFormComponent} from "./inventory/product/product-form/product-form.component";
import {BrandFormComponent} from "./inventory/brand/brand-form/brand-form.component";
import {BaseTableComponent} from "./inventory/base-table/base-table.component";
import {TaxFormComponent} from "./inventory/tax/tax-form/tax-form.component";
import {TagFormComponent} from "./inventory/tag/tag-form/tag-form.component";
import {SaltFormComponent} from "./inventory/salt/salt-form/salt-form.component";
import {DistributorFormComponent} from "./inventory/distributor/distributor-form/distributor-form.component";
import {ReportingComponent} from "./reporting/reporting.component";
import {SaleComponent} from "./reporting/sale/sale.component";
import {OrderComponent} from "./reporting/order/order.component";
import {CustomerComponent} from "./reporting/customer/customer.component";


const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ShopComponent,
    BackButtonComponent,
    ItemDiscountComponent,
    ProductInfoComponent,
    ProductComponent,
    BrandComponent,
    TagComponent,
    SaltComponent,
    TaxComponent,
    DistributorComponent,
    CheckoutComponent,
    BillingComponent,
    InventoryComponent,
    MenuComponent,
    BrandFormComponent,
    BaseTableComponent,
    ReportingComponent,
    SaleComponent,
    OrderComponent,
    CustomerComponent,
    ProductFormComponent,
    DistributorFormComponent,
    TagFormComponent,
    TaxFormComponent,
    SaltFormComponent,
    TableRowComponent,
    ProductSearchPipe,
    ProductBrandPipe,
    ProductDistributorPipe,
    ProductTagPipe,
    ProductSaltPipe,
    KeysPipe,
    GoBackDirective
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    CovalentCoreModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentSearchModule.forRoot(),
    TagInputModule,
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
    HttpService,
    AuthService,
    UsersService,
    RetailShopsService,
    ItemsService,
    DistributorService, TagsService, SaltsService,
    TaxsService,
    BrandsService,
    CartService,
    OrdersService,
    IndexDBServiceService

  ], // additional providers needed for this module
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent,
    ProductFormComponent, BrandFormComponent, TagFormComponent, TaxFormComponent, SaltFormComponent,
    DistributorFormComponent],
  bootstrap: [ AppComponent ],
})
export class AppModule {}

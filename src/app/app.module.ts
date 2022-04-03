import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AuthGuardService } from './auth-guard.service';
import { MockyUrlsService } from './services/mocky-urls.service';
import { AdminGuardService } from './services/admin-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenPoputContainerComponent } from './open-poput-container/open-poput-container.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    // NgbModule,
    BsNavbarComponent,
    CheckOutComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    PageNotFoundComponent,
    OpenPoputContainerComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'my/orders', component: MyOrdersComponent,canActivate:[AuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin/products', component: AdminProductsComponent,canActivate:[AuthGuardService,AdminGuardService] },
      { path: 'admin/orders', component: AdminOrdersComponent },
      { path: '**',pathMatch: 'full', component: PageNotFoundComponent },
      { path: 'product-Info',component: ProductInfoComponent }
      // {path: '404', component: PageNotFoundComponent},
      // {path: '**', redirectTo: '/404'}
    ]),
    
  ],
  
  providers: [
    AuthGuardService,
    MockyUrlsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule,MatSortModule,MatFormFieldModule, MatInputModule,MatButtonModule, MatRadioModule, MatPaginatorModule } from '@angular/material';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AdmincusineComponent } from './admincusine/admincusine.component';
import { AdmindishComponent } from './admindish/admindish.component';
import { AdmincusineeditComponent } from './admincusineedit/admincusineedit.component';
import { AdmindisheditComponent } from './admindishedit/admindishedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    OrderComponent,
    OrderdetailComponent,
    AdminComponent,
    HeaderComponent,
    AdmincusineComponent,
    AdmindishComponent,
    AdmincusineeditComponent,
    AdmindisheditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

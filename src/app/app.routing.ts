import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AdminComponent } from './admin/admin.component';
import { AdmincusineComponent } from './admincusine/admincusine.component';
import { AdmindishComponent } from './admindish/admindish.component';
import { AdmincusineeditComponent } from './admincusineedit/admincusineedit.component';
import { AdmindisheditComponent } from './admindishedit/admindishedit.component';


const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'forgetpass',component:ForgetpasswordComponent},
  {path:'signup',component:SignupComponent},
  {path:'order',component:OrderComponent},
  {path:'orderdetail/:id',component:OrderdetailComponent},
  {path:'admin',component:AdminComponent},
  {path:'admincusine',component:AdmincusineComponent},
  {path:'admindish',component:AdmindishComponent},
  {path:'admincusineedit/:id',component:AdmincusineeditComponent},
  {path:'admindishedit/:id',component:AdmindisheditComponent}
];
export const routing=RouterModule.forRoot(arr);

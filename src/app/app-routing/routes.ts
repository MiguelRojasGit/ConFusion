import {Routes} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DomicilioComponent } from '../domicilio/domicilio.component';
import { AtencionComponent } from '../atencionalcliente/atencion.component';
import { MenuComponent } from '../menu/menu.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { ProductsComponent} from '../menu/Products/products/products.component';
export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'atencion',     component: AtencionComponent },
  { path: 'productdetail/:id',     component: ProductdetailComponent },
  { path: 'domicilio',    component: DomicilioComponent},
  { path: 'products/:id',    component: ProductsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

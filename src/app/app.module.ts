import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HammerModule } from '@angular/platform-browser'
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { ProductService } from './Services/product.service';
import { LeaderService} from './Services/leader.service';
import { CategoryService } from './Services/category.service';
import { ValidationService } from './Services/validation.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { AtencionComponent } from './atencionalcliente/atencion.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './menu/Products/products/products.component'




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DomicilioComponent,
    AtencionComponent,
    LoginComponent,
    ProductdetailComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HammerModule,
    FlexLayoutModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    MatStepperModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [ProductService,LeaderService,CategoryService,ValidationService],
  entryComponents: [
    LoginComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }

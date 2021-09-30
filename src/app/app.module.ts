import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './service/product.service';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, NgbModule],

  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    NavComponent,
    ProductEditComponent,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

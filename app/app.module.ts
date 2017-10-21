import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {BookComponent} from './book.component'
import { ProductListComponent } from "./products/product-list.component";
import { OrderListComponent } from './orders/order-list.component';
import { OrderFilterPipe } from './orders/order-filter.pipe';
import { OrderQualityPipe } from './orders/order-quality.pipe';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  declarations: [
    AppComponent,
    BookComponent,
    ProductListComponent,
    OrderListComponent,
    OrderFilterPipe,
    OrderQualityPipe
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }



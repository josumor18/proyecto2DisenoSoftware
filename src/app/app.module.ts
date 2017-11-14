import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VendedorDetailsComponent } from './vendedores/vendedor-details/vendedor-details.component';
import { VendedorListComponent } from './vendedores/vendedor-list/vendedor-list.component';
import { ComboListComponent } from './promociones/combo-list/combo-list.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VendedorDetailsComponent,
    VendedorListComponent,
    ComboListComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
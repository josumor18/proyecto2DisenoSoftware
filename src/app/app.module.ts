import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VendedorDetailsComponent } from './vendedores/vendedor-details/vendedor-details.component';
import { VendedorListComponent } from './vendedores/vendedor-list/vendedor-list.component';
import { ComboDetailsComponent } from './promociones/combo-details/combo-details.component';
import { ComboListComponent } from './promociones/combo-list/combo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VendedorDetailsComponent,
    VendedorListComponent,
    ComboDetailsComponent,
    ComboListComponent
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
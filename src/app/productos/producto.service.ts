import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductoService {

  private productosUrl = '/api/productos';

  constructor (private http: Http) {}
  
  // get("/api/productos")
    getProductos(): Promise<void | Producto[]> {
      return this.http.get(this.productosUrl)
                 .toPromise()
                 .then(response => response.json() as Producto[])
                 .catch(this.handleError);
    }

}
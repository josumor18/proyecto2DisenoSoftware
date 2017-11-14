import { Injectable } from '@angular/core';
import { Vendedor } from './vendedor';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VendedorService {

  private vendedoresUrl = '/api/vendedores';

  constructor (private http: Http) {}
  
  // get("/api/vendedores")
    getVendedores(): Promise<void | Vendedor[]> {
      return this.http.get(this.vendedoresUrl)
                 .toPromise()
                 .then(response => response.json() as Vendedor[])
                 .catch(this.handleError);
    }

    // post("/api/vendedores")
    createVendedor(newVendedor: Vendedor): Promise<void | Vendedor> {
      return this.http.post(this.vendedoresUrl, newVendedor)
                 .toPromise()
                 .then(response => response.json() as Vendedor)
                 .catch(this.handleError);
    }

    // get("/api/vendedores/:id") endpoint not used by Angular app

    // delete("/api/vendedor/:id")
    deleteVendedor(delVendedorId: String): Promise<void | String> {
      return this.http.delete(this.vendedoresUrl + '/' + delVendedorId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/vendedores/:id")
    updateVendedor(putVendedor: Vendedor): Promise<void | Vendedor> {
      var putUrl = this.vendedoresUrl + '/' + putVendedor._id;
      return this.http.put(putUrl, putContact)
                 .toPromise()
                 .then(response => response.json() as Contact)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
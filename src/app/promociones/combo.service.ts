import { Injectable } from '@angular/core';
import { Combo } from './combo';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ComboService {

  private combosUrl = '/api/combos';

  constructor (private http: Http) {}
  
  // get("/api/combos")
    getCombos(): Promise<void | Combo[]> {
      return this.http.get(this.combosUrl)
                 .toPromise()
                 .then(response => response.json() as Combo[])
                 .catch(this.handleError);
    }
    
    // post("/api/combos")
    createCombo(newCombo: Combo): Promise<void | Combo> {
      return this.http.post(this.combosUrl, newCombo)
                 .toPromise()
                 .then(response => response.json() as Combo)
                 .catch(this.handleError);
    }

    // get("/api/vendedores/:id") endpoint not used by Angular app

    // delete("/api/vendedor/:id")
    deleteCombo(delComboId: String): Promise<void | String> {
      return this.http.delete(this.combosUrl + '/' + delComboId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/vendedores/:id")
    updateCombo(putCombo: Combo): Promise<void | Combo> {
      var putUrl = this.combosUrl + '/' + putCombo._id;
      return this.http.put(putUrl, putCombo)
                 .toPromise()
                 .then(response => response.json() as Combo)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
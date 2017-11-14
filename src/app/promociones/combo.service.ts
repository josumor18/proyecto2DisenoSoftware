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

}
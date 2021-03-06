import { Component, Input } from '@angular/core';
import { Combo } from '../combo';
import { ComboService } from '../combo.service';
import { ComboDetailsComponent } from '../combo-details/combo-details.component';
import { Vendedor } from 'app/vendedores/vendedor';

@Component({
  selector: 'combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['./combo-list.component.css'],
  providers: [ComboService]
})

export class ComboListComponent{


  @Input()
  vendedor: Vendedor;
  
  combos: Combo[]
  combosAux: Combo[]
  selectedCombo: Combo

  constructor(private comboService: ComboService) {}

  ngOnInit() {
     this.comboService
      .getCombos()
      .then((combos: Combo[]) => {
        this.combos = combos.map((combo) => {
          return combo;
        });
       
      });
      
      this.combosVendedor();
      this.combosAux = [];
  }
  
  combosVendedor(){
    this.combosAux = [];
    for(var i = 0; i < this.combos.length; i++){
        if(this.combos[i].vendedor == this.vendedor.id){
            this.combosAux.push(this.combos[i]);
        }
    }
  }
  
  private getIndexOfCombo = (comboId: String) => {
    return this.combos.findIndex((combo) => {
      return combo._id === comboId;
    });
  }

  selectCombo(combo: Combo) {
    this.selectedCombo = combo
  }

  createNewCombo() {
    var combo: Combo = {
      codigo: '',
	  vendedor: '',
      nombre: '',
      precio: 0,
      detalle: '',
    };

    // By default, a newly-created combo will have the selected state.
    this.selectCombo(combo);
  }

  deleteCombo = (comboId: String) => {
    var idx = this.getIndexOfCombo(comboId);
    if (idx !== -1) {
      this.combos.splice(idx, 1);
      this.selectCombo(null);
    }
    return this.combos;
  }

  addCombo = (combo: Combo) => {
    this.combos.push(combo);
    this.selectCombo(combo);
    return this.combos;
  }

  updateCombo = (combo: Combo) => {
    var idx = this.getIndexOfCombo(combo._id);
    if (idx !== -1) {
      this.combos[idx] = combo;
      this.selectCombo(combo);
    }
    return this.combos;
  }
}
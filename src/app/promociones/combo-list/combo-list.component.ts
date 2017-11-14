import { Component, Input } from '@angular/core';
import { Combo } from '../combo';
import { ComboService } from '../combo.service';
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
  selectedCombo: Combo

  constructor(private comboService: ComboService) { }

  ngOnInit() {
     this.comboService
      .getCombos()
      .then((combos: Combo[]) => {
        this.combos = combos.map((combo) => {
          if(combo.vendedor == vendedor.id){
            return combo;
          }
        });
       
      });
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
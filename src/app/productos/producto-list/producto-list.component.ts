import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  providers: [ProductoService]
})
export class ProductoListComponent implements OnInit {

 @Input()
  combo: Combo;
  productos: Producto[]
  productosAux: Producto[]
  selectedProducto: Producto

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
     this.productoService
      .getProductos()
      .then((productos: Producto[]) => {
        this.productos = productos.map((producto) => {
          return producto;
        });
       
      });
  }

  productosCombo(){
    this.productosAux = [];
    for(var i = 0; i < this.productos.length; i++){
        if(this.productos[i].promocion == this.combo.id){
            this.productosAux.push(this.productos[i]);
        }
    }
  }
  
    
  private getIndexOfProducto = (productoId: String) => {
    return this.productos.findIndex((producto) => {
      return producto._id === productoId;
    });
  }
/*
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
  */
  
  
  
  
}
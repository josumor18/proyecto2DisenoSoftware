import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ProductoDetailsComponent } from '../producto-details/producto-details.component';

@Component({
  selector: 'producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  providers: [ProductoService]
})
export class ProductoListComponent implements OnInit {

  productos: Producto[]
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

}
/*
  private getIndexOfVendedor = (vendedorId: String) => {
    return this.vendedores.findIndex((vendedor) => {
      return vendedor._id === vendedorId;
    });
  }

  selectVendedor(vendedor: Vendedor) {
    this.selectedVendedor = vendedor
  }

  createNewVendedor() {
    var vendedor: Vendedor = {
      id: '',
      name: '',
      telefono: '',
      cant_prod: 0,
      cant_prom: 0,
      calif: 0
    };

    // By default, a newly-created vendedor will have the selected state.
    this.selectVendedor(vendedor);
  }

  deleteVendedor = (vendedorId: String) => {
    var idx = this.getIndexOfVendedor(vendedorId);
    if (idx !== -1) {
      this.vendedores.splice(idx, 1);
      this.selectVendedor(null);
    }
    return this.vendedores;
  }

  addVendedor = (vendedor: Vendedor) => {
    this.vendedores.push(vendedor);
    this.selectVendedor(vendedor);
    return this.vendedores;
  }

  updateVendedor = (vendedor: Vendedor) => {
    var idx = this.getIndexOfVendedor(vendedor._id);
    if (idx !== -1) {
      this.vendedores[idx] = vendedor;
      this.selectVendedor(vendedor);
    }
    return this.vendedores;
  }
}*/
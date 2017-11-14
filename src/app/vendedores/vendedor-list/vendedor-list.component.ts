import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../vendedor';
import { VendedorService } from '../vendedor.service';
import { VendedorDetailsComponent } from '../vendedor-details/vendedor-details.component';

@Component({
  selector: 'vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css'],
  providers: [VendedorService]
})

export class VendedorListComponent implements OnInit {

  vendedores: Vendedor[]
  selectedVendedor: Vendedor

  constructor(private vendedorService: VendedorService) { }

  ngOnInit() {
     this.vendedorService
      .getVendedores()
      .then((vendedores: Vendedor[]) => {
        
       
      });
  }

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
      name: '',
      apellidos: ''
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
}
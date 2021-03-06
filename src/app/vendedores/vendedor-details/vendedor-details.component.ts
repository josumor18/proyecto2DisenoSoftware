import { Component, Input } from '@angular/core';
import { Vendedor } from '../vendedor';
import { VendedorService } from '../vendedor.service';
import { ComboService } from 'app/promociones/combo.service';
import { ComboListComponent } from 'app/promociones/combo-list/combo-list.component';
import { ComboDetailsComponent } from 'app/promociones/combo-details/combo-details.component';

@Component({
  selector: 'vendedor-details',
  templateUrl: './vendedor-details.component.html',
  styleUrls: ['./vendedor-details.component.css']
})

export class VendedorDetailsComponent {
  @Input()
  vendedor: Vendedor;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private vendedorService: VendedorService) {}

  createVendedor(vendedor: Vendedor) {
    this.vendedorService.createVendedor(vendedor).then((newVendedor: Vendedor) => {
      this.createHandler(newVendedor);
    });
  }

  updateVendedor(vendedor: Vendedor): void {
    this.vendedorService.updateVendedor(vendedor).then((updatedVendedor: Vendedor) => {
      this.updateHandler(updatedVendedor);
    });
  }

  deleteVendedor(vendedorId: String): void {
    this.vendedorService.deleteVendedor(vendedorId).then((deletedVendedorId: String) => {
      this.deleteHandler(deletedVendedorId);
    });
  }
}
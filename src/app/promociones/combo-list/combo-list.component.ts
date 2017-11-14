import { Component, Input } from '@angular/core';
import { Combo } from '../combo';
import { ComboService } from '../combo.service';

@Component({
  selector: 'combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['./combo-list.component.css'],
  providers: [ComboService]
})

export class ComboDetailsComponent {
  @Input()
  combo: Combo;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private comboService: ComboService) {}

  createCombo(combo: Combo) {
    this.comboService.createCombo(combo).then((newCombo: Combo) => {
      this.createHandler(newCombo);
    });
  }

  updateCombo(combo: Combo): void {
    this.comboService.updateCombo(combo).then((updatedCombo: Combo) => {
      this.updateHandler(updatedCombo);
    });
  }

  deleteCombo(comboId: String): void {
    this.comboService.deleteCombo(comboId).then((deletedComboId: String) => {
      this.deleteHandler(deletedComboId);
    });
  }
}
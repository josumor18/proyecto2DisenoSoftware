import { Component, Input } from '@angular/core';
import { Combo } from '../combo';
import { ComboService } from '../combo.service';

@Component({
  selector: 'combo-details',
  templateUrl: './combo-details.component.html',
  styleUrls: ['./combo-details.component.css']
})

export class ComboDetailsComponent {
  @Input()
  combo: Combo;

  constructor (private comboService: ComboService) {}
}
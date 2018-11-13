import { Component, OnInit, Input } from '@angular/core';
import { TasInfoEntity, TasInfoXTotvsProdInfoEntity } from 'src/app/Entities/TASEntity';

@Component({
  selector: 'app-xtotvs-tab',
  templateUrl: './xtotvs-tab.component.html'
})
export class XtotvsTabComponent implements OnInit {
  @Input() infoProperty: TasInfoEntity;

  constructor() { }
  ngOnInit() {
  }

  onPClick() {
    this.infoProperty['x-totvs'].productInformation.push(new TasInfoXTotvsProdInfoEntity()); // adds new product

  }
  deletePassedProduct(xtotvsProduct: TasInfoXTotvsProdInfoEntity) {
    const productIndex = this.infoProperty['x-totvs'].productInformation.findIndex(value => value === xtotvsProduct); // gets product index
    this.infoProperty['x-totvs'].productInformation = this.infoProperty['x-totvs'].productInformation.splice(productIndex, 1);
  }

}

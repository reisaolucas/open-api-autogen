import { Component, OnInit, Input } from '@angular/core';
import { TasInfoEntity, TasInfoXTotvsProdInfoEntity } from 'src/app/Entities/TASEntity';

@Component({
  selector: 'app-xtotvs-tab',
  templateUrl: './xtotvs-tab.component.html'
})
export class XtotvsTabComponent implements OnInit {
  @Input() infoProperty: TasInfoEntity;
  @Input() productInformation = Array<TasInfoXTotvsProdInfoEntity>();

  constructor() { }
  ngOnInit() {
  }
  onPClick() {
    this.productInformation.push(new TasInfoXTotvsProdInfoEntity()); // adds new product
  }
  deletePassedProduct(xtotvsProduct: TasInfoXTotvsProdInfoEntity) {
    console.log('teste');
    const productIndex = this.productInformation.findIndex(value => value === xtotvsProduct); // gets server index
    console.log(productIndex);

    this.productInformation = this.productInformation.splice(productIndex, 1);
  }

}

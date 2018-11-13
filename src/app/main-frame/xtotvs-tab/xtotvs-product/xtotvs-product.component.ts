import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasInfoXTotvsProdInfoEntity } from 'src/app/Entities/TASEntity';


@Component({
  selector: 'app-xtotvs-product',
  templateUrl: './xtotvs-product.component.html'
})
export class XtotvsProductComponent implements OnInit {

  constructor() { }
  @Input() xtotvsProduct: TasInfoXTotvsProdInfoEntity;
  @Output() deleteClicked: EventEmitter<TasInfoXTotvsProdInfoEntity> = new EventEmitter<TasInfoXTotvsProdInfoEntity>();
  ngOnInit() {
  }
  passProductToProducts() {
    this.deleteClicked.emit(this.xtotvsProduct); // pass the xtotvs product to productInformation array when trash icon is clicked
  }

}

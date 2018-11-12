import { Component, OnInit, Input } from '@angular/core';
import { TasInfoEntity } from 'src/app/Entities/TASEntity';

@Component({
  selector: 'app-xtotvs-tab',
  templateUrl: './xtotvs-tab.component.html'
})
export class XtotvsTabComponent implements OnInit {
  @Input() infoProperty: TasInfoEntity;

  constructor() { }
  ngOnInit() {
  }

}

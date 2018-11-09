import { Component, OnInit } from '@angular/core';
import { TasEntity } from '../Entities/TASEntity';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html'
})
export class MainFrameComponent implements OnInit {

  constructor() { }
  oasFile: TasEntity = new TasEntity();
  ngOnInit() {
  }

  jsonChanged($event) {
    this.oasFile = $event;
  }
}

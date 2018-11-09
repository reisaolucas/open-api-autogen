import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-code-tab',
  templateUrl: './code-tab.component.html'
})
export class CodeTabComponent implements OnInit {

  constructor() { }

  @Input() oasObjectProperty;
  @Output() jsonChanged: EventEmitter<object> = new EventEmitter<object>();

  ngOnInit() {
  }

  EventEmitter($event) {
    this.oasObjectProperty = JSON.parse($event);
    this.jsonChanged.emit(this.oasObjectProperty);
  }

}

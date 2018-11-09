import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-box',
  templateUrl: './server-box.component.html'
})
export class ServerBoxComponent implements OnInit {

  constructor() { }
  @Input() serverProperty;
  ngOnInit() {
  }

}

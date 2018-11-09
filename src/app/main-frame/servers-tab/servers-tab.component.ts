import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers-tab',
  templateUrl: './servers-tab.component.html'
})
export class ServersTabComponent implements OnInit {

  arrayGenerica = [
    1, 2, 3, 4, 5
  ];

  @Input() serversProperty;

  constructor() { }

  ngOnInit() {
  }

}

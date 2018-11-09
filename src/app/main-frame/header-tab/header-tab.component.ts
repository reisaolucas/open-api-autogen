import { Component, OnInit, Input } from '@angular/core';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html'
})
export class HeaderTabComponent implements OnInit {

  constructor() { }

  @Input() infoProperty;

  ngOnInit() {
  }

}

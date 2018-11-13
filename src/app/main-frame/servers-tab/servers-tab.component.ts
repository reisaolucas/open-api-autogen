import { Component, OnInit, Input } from '@angular/core';
import { TasServerEntity } from 'src/app/Entities/TASEntity';

@Component({
  selector: 'app-servers-tab',
  templateUrl: './servers-tab.component.html'
})
export class ServersTabComponent implements OnInit {

  @Input() serversProperty: Array<TasServerEntity>;

  constructor() { }

  ngOnInit() {
  }

  onTClick() {
    this.serversProperty.push(new TasServerEntity()); // adds new server
  }

  deletePassedServer(serverProperty: TasServerEntity) {
    console.log('teste');
    const serverIndex = this.serversProperty.findIndex(value => value === serverProperty); // gets server index
    console.log(serverIndex);

    this.serversProperty = this.serversProperty.splice(serverIndex, 1);
  }


}

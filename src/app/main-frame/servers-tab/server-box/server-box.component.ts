import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasServerEntity } from 'src/app/Entities/TASEntity';

@Component({
  selector: 'app-server-box',
  templateUrl: './server-box.component.html'
})
export class ServerBoxComponent implements OnInit {

  constructor() { }
  @Input() serverProperty: TasServerEntity;
  @Output() deleteClicked: EventEmitter<TasServerEntity> = new EventEmitter<TasServerEntity>();

  ngOnInit() {
  }

  passServerToServers() {
    this.deleteClicked.emit(this.serverProperty); // pass the server to servers array when trash icon is clicked
  }

}

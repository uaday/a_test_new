import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'app';
  status = 'registration';
  
  @Output() fSelect= new EventEmitter<string> ();

  onCheck(type: string) {
    this.fSelect.emit(type);
  }

}

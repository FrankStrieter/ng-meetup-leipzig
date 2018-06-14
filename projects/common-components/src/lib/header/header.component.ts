import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'led-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() title = 'Hallo Leipzig';
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: string = 'home';

  constructor(private scrollbar: ViewportScroller) {}

  ngOnInit(): void {}

  scrollFunc(id: string) {
    this.active = id;
    window.document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

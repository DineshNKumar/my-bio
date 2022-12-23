import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  linkedIn = faLinkedinIn;
  whatsapp = faWhatsapp;
  github = faGithub;

  isMobile = false;
  constructor() {}

  ngOnInit(): void {
    var ua = navigator.userAgent;

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        ua
      )
    )
      this.isMobile = true;
  }

  scrollFunc(id: string) {
    window.document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

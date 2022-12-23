import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  linkedIn = faLinkedinIn;
  github = faGithub;
  whatsapp = faWhatsapp;
  contactMe = faPaperPlane;

  constructor() { }

  ngOnInit(): void {
  }

}

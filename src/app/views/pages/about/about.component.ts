import { Component, OnInit } from '@angular/core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  downloadCV = faFileDownload;

  constructor() { }

  ngOnInit(): void {
  }

}

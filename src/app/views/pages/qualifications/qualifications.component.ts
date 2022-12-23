import { Component, OnInit } from '@angular/core';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {
  upArrow = faArrowUpLong;

  constructor() { }

  ngOnInit(): void {
  }

}

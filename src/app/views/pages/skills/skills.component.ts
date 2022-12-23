import { Component, OnInit } from '@angular/core';
import { faChevronDown, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  chevronDown = faChevronDown;
  faCode = faCode;
  faDatabase = faDatabase;

  constructor() { }

  ngOnInit(): void {
  }

}

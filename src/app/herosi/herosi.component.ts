import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herosi',
  templateUrl: './herosi.component.html',
  styleUrls: ['./herosi.component.scss']
})
export class HerosiComponent implements OnInit {
  heros='Antoni';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-herosi',
  templateUrl: './herosi.component.html',
  styleUrls: ['./herosi.component.scss']
})
export class HerosiComponent implements OnInit {
  heros: Hero ={
    id:1,
    nazwa: "Antoni",
    wiek: 56
  }
  constructor() { }

  ngOnInit(): void {
  }

}

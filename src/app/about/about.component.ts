import { Component, OnInit ,Input } from '@angular/core';

import { Hero } from '../hero';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
   @Input() akhil: Hero;
   
  
  

  constructor() { }

  ngOnInit() {
  }

}

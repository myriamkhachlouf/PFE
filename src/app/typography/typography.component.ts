import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit() :
    void {
      var divElement = document.getElementById('viz1683553713815');
      var vizElement = divElement.getElementsByTagName('object')[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '900px';
        vizElement.style.height = '727px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '1000px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '827px';
      }
      var scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  
  }



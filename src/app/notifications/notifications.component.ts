import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var divElement = document.getElementById('viz1685299013036');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '1200px';
      vizElement.style.height = '727px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '1200px';
      vizElement.style.height = '727px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '827px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-gift",
          message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
      },{
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }
}

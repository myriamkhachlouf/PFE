import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home',  icon:'pe-7s-home', class: '' },
  { path: '/dashboard', title: 'General Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/deals', title: 'Sales Deals',  icon: 'pe-7s-note2', class: '' },
  { path: '/table', title: 'Customers info',  icon:'pe-7s-id', class: '' },
  { path: '/customersatisfaction', title: 'Customer Satisfaction',  icon:'pe-7s-smile', class: '' },
  { path: '/maps', title: 'World Wide Customers',  icon:'pe-7s-map-2', class: '' },
  { path: '/Monitary', title:'Monitary Details' , icon:'pe-7s-cash', class:''},
  { path: '/notifications', title: 'Employee Tracking',  icon:'pe-7s-target', class: '' },
  { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: '/Competitor', title: 'View on the market',  icon:'pe-7s-look', class: 'active-pro' },

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.css']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];
  isSidebarOpen: boolean = false;
 
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.checkScreenWidth();
    
  }

  logout() {
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  isMobileMenu() {
    return window.innerWidth <= 991;
  }

  checkScreenWidth() {
    $(window).on('resize', () => {
      if (!this.isMobileMenu() && this.isSidebarOpen) {
        this.toggleSidebar();
      }
    });
  }
}

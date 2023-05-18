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
  { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
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

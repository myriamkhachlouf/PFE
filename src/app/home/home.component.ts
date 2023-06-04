import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { Spinner } from 'spin.js';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public emailChartType: ChartType;
  public emailChartData: any;
  public emailChartLegendItems: LegendItem[];

  public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];

  public activityChartType: ChartType;
  public activityChartData: any;
  public activityChartOptions: any;
  public activityChartResponsive: any[];
  public activityChartLegendItems: LegendItem[];
  private loader: Spinner;

  constructor() { }

  ngOnInit(): void {
  
    this.showLoader();
    var divElement = document.getElementById('viz1685892059179');
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
    this.hideLoader();
  }

  private showLoader() {
    const loaderOptions = {
      color: '#0000', // Customize the color of the loader
      lines: 12, // Number of lines to display
      length: 10, // Length of each line
      width: 4, // Width of each line
      radius: 12, // Radius of the inner circle
    };
    const target = document.getElementById('loader');
    this.loader = new Spinner(loaderOptions).spin(target);
  }

  private hideLoader() {
    this.loader.stop();
  }
}

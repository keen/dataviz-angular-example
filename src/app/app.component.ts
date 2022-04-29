import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { KeenDataviz } from '@keen.io/dataviz';

const data = [
  { name: 'JavaScript', jobOffers: 225 },
  { name: 'Python', jobOffers: 122 },
  { name: 'Go', jobOffers: 10 },
  { name: 'PHP', jobOffers: 11 },
  { name: 'Java', jobOffers: 134 },
  { name: 'Scala', jobOffers: 98 },
  { name: 'Groovy', jobOffers: 11 },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'dataviz-angular';

  @ViewChild('chart') el!: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const container: HTMLElement = this.renderer.selectRootElement(this.el["nativeElement"]);
    new KeenDataviz({
      type: 'pie',
      container: container,
      widget: {
        title: {
          content: 'Job offers',
        },
        subtitle: {
          content: 'By programming languages',
        },
      },
      settings: {
        data,
        keys: ['jobOffers'],
        labelSelector: 'name',
      },
    }).render();
  }
}

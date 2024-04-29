import { Component, AfterViewInit, ElementRef, ViewChild, QueryList, ViewChildren, Renderer2 } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
loc:any="indore"
 getMapUrl(): string {
 
  return `https://maps.google.com/maps?q=nearby+garage%2C+indore+%2Cmp+%2Cindia&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}
}
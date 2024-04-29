import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
 
  template: `
  <iframe
    class="position-relative rounded w-100 h-100"
    [src]="mapUrl"
    frameborder="0"
    style="min-height: 350px; border:0;"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
  ></iframe>
  <div class=" container-xxl py-5 d-flex justify-content-center align-items-center gap-4" data-wow-delay="0.2s"> <input type="text" name="" id=""  placeholder="Enter the location" class=" w-50" #locIP/><button type="submit" class="btn btn-primary  px-5 " (click)="check(locIP.value)">Search</button></div>
`,
  styleUrl: './map.component.css'
})
export class MapComponent {

   loc: string='indore'; // Input property to receive the location

   constructor(private sanitizer: DomSanitizer) {}
   check(arg0: string) {
    this.loc=arg0;
    }

   get mapUrl(): SafeResourceUrl {
     const url = `https://maps.google.com/maps?q=nearby+garage%2C+${this.loc}+%2Cmp+%2Cindia&t=&z=13&ie=UTF8&iwloc=&output=embed`;
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }

}

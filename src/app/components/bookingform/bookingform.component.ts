import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrl: './bookingform.component.css',
})
export class BookingformComponent implements OnInit {
  constructor(private rest: RestService) {}
  ngOnInit(): void {}

  bookingform = new FormGroup({
    email: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),

  });

  //

  async addPost() {
    
    
    const result = await fetch(this.rest.apiUrlBooking, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer 3f0b2e44d9a4a90af2b4af732830c21efa85d877c2447461efc88c22fdaa3739fb1413ccd5a4ba1c171ad5db1910dc4b5b5eb5dea57c800bd7eda97fc572615d8cba2904a2ce95f8a9e3ec6bbd479a25eb6e8730101334d2fad508430a9487482f76782332b686b45da5b9d61a6b7a7e2a27b196e0194a82c1b8c4a00954e241',
      },
      body: JSON.stringify({
        data: {
          name: this.bookingform.value.name as string,
          email: this.bookingform.value.email as string,
          location: this.bookingform.value.location as string,
          service: this.bookingform.value.service as string,
          date: this.bookingform.value.date as string,
          
        }
      }),
    }).then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    console.log(result);
  }
}

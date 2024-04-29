import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signupform = new FormGroup({
      phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    Id: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [
      Validators.required,

      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
     
    ]),
  });
  handleSubmit() {
    console.log(this.signupform.value);

    const email: string = this.signupform.value.email as string;
    const password: string = this.signupform.value.password as string;
    this.authService
      .registerWithEmailAndPassword(email, password)
      .then((res: any) => {
        this.router.navigateByUrl('/signin');
      })
      .catch((e: any) => {
        console.error(e);
      });
  }
  get data() {
    return this.signupform.controls;
  }
}

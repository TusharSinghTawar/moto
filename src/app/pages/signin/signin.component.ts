import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  public error = false;
  handleSubmit() {
    throw new Error('Method not implemented.');
  }
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  signinform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  get data() {
    return this.signinform.controls;
  }

  loginWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.router.navigateByUrl('/home');
      })
      .catch((e: any) => {
        console.error(e);
      });
  }
  loginWithEmailAndPassword() {
    console.log(this.signinform.value);
    const email: string = this.signinform.value.email as string;
    const password: string = this.signinform.value.password as string;
    this.authService
      .signInwithEmailAndPassword(email, password)
      .then((res: any) => {
        this.router.navigateByUrl('/home');
      })
      .catch((e: any) => {
        console.error(e);
        this.error = true;
      });
  }
}

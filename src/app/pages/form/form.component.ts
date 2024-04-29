import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { RestService } from '../../services/rest/rest.service';
import { error } from 'node:console';
// const container1 = document.getElementById('container') as HTMLDivElement;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  title = 'login';

   onclick(){}

  constructor(public authService: AuthService, private router: Router ,private rest:RestService) {}
  ngOnInit(): void {
	const signUpButton = document.getElementById('signUp') as HTMLButtonElement;
	const signInButton = document.getElementById('signIn') as HTMLButtonElement;
	const signUp = document.getElementById('Up') as HTMLButtonElement;
	const signIn = document.getElementById('logIn') as HTMLButtonElement;
  const container = document.getElementById('container') as HTMLDivElement;

	signUpButton.addEventListener('click', () => {
	  container.classList.add('right-panel-active');
	});

	signInButton.addEventListener('click', () => {
	  container.classList.remove('right-panel-active');
	});
	signUp.addEventListener('click', () => {
		container.classList.add('right-panel-active');
	  });
  
	  signIn.addEventListener('click', () => {
		container.classList.remove('right-panel-active');
	  });
    this.onclick=()=>{
      container.classList.remove('right-panel-active');
    };
  
  }
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
	Validators.required,Validators.minLength(3),Validators.maxLength(20),
   
  ]),
});
handleSignUp() {
  this.addPost();
    console.log(this.signupform.value);

    const email: string = this.signupform.value.email as string;
    const password: string = this.signupform.value.password as string;
    this.authService
      .registerWithEmailAndPassword(email, password)
      .then((res: any) => {console.warn(res);
      this.onclick();
          // container1.classList.remove('right-panel-active')
        })
      .catch((e: any) => {
        alert('Email is already exists. Please try another email')
       
        console.error(e);
      });
      this.addPost();
  }
  get data() {
    return this.signupform.controls;
  }
//   start of sign in form
  signinform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  get data1() {
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
  loginWithFB() {
    this.authService
    .signInWithFB()
    .then((res: any) => {
      this.router.navigateByUrl('/home');
    })
    .catch((e: any) => {
      console.error(e);
    });
    }
    loginWithTwitter() {
      this.authService
      .signInWithTwitter()
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
        alert("Invalid Username or Password");
      });
  }
  async addPost() {
    
    
const result = await fetch(this.rest.apiUrlUser, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer 3f0b2e44d9a4a90af2b4af732830c21efa85d877c2447461efc88c22fdaa3739fb1413ccd5a4ba1c171ad5db1910dc4b5b5eb5dea57c800bd7eda97fc572615d8cba2904a2ce95f8a9e3ec6bbd479a25eb6e8730101334d2fad508430a9487482f76782332b686b45da5b9d61a6b7a7e2a27b196e0194a82c1b8c4a00954e241',
      },
      body: JSON.stringify({
        data: {
          proof: this.signupform.value.Id as string,
          email: this.signupform.value.email as string,
          phone : this.signupform.value.phone ,
          password: this.signupform.value.password as string,
          
          
        }
      }),
    }).then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    console.log(result);
  }
}
  

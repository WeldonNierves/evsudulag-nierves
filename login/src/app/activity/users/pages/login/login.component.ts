import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){
    this.loginForm = this.fb.group({
      username: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required]]
    })
  }

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

  msg: string = '';

  onSubmit() {

    this.userService.userLogin(this.loginForm.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/activity/dashboard']);
          this.msg = '';
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.msg = 'Invalid username or password.';
        } else {
          this.msg = 'Something went wrong. Please try again.';
        }
      }
    });
    
    // const { username, password } = this.loginForm.value;

    // if(this.userService.validateLogin(username, password)){
    //   this.router.navigate(['/activity/detail'])
    // } else {
    //   console.log('error')
    // }
  }

}

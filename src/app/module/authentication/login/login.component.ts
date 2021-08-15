import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from 'src/app/data/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  onDestroy$ = new Subject();
  errMsg = ''
  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  login() {
    let userName = this.loginForm.value.userName;
    let password = this.loginForm.value.password;
    this.loginService.login(userName, password).pipe(takeUntil(this.onDestroy$)).subscribe(res => {
      console.log(res)
      if (res.headers.get('Authorization')) {
        localStorage.setItem('token', res.headers.get('Authorization'))
        this.route.navigate(['home'])
      }
    }, (error) => {
      this.errMsg = ''
      if (error.status === 0) {
        this.errMsg = 'Server Down'
      }
      if (error.status === 401 || error.status === 403) {
        this.errMsg = "Invalid UserName/Password"
      }
    })
    //this.route.navigate(['home'])
   }
}

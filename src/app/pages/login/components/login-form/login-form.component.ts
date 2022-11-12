import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RequestLogin } from 'src/app/shared/models/request-login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public requestLogin!: RequestLogin
  public incorrectInfo: boolean = false
  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin()
  }

  login(){
    this.loginService.login(this.requestLogin)
      .subscribe(result =>{
        window.sessionStorage.setItem('session', `name:${result.name}, logo:${result.logo}`)
        //this.router.navigate('/')
        this.incorrectInfo=false
      },
      erro =>{
        window.sessionStorage.clear()
        this.incorrectInfo = true
      })  
  }
}


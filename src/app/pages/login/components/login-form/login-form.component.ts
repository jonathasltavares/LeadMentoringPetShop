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
  public infoErrada: boolean = false
  constructor(private loginService: LoginService, private router: Router ) {
  }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin()
    this.loginService.infoErradas.subscribe(
      info =>{
        this.infoErrada = info
      }
    )
  }

  login(){
    this.loginService.login(this.requestLogin)
  }
  ancorCadastro(){
    this.router.navigate(['cadastro']);
  }
}


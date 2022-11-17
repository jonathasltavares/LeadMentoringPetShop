import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from '../shared/models/request-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "https://lmpetshopapi.herokuapp.com/PetShop"
  infoErradas = new EventEmitter<boolean>()
  private usuarioAutenticado:boolean = true
  constructor(private http:HttpClient, private router: Router) { }

  login(requestLogin: RequestLogin){  
    this.http.get<any>(`${this.apiUrl}/login?email=${requestLogin.email}&password=${requestLogin.password}`)
    .subscribe((result) =>{
      window.sessionStorage.setItem('session', `{"name":"${result.name}", "logo":"${result.logo}", "id":"${result.id}"}`)
      this.router.navigate(['produtos'])
      this.usuarioAutenticado = true
      this.infoErradas.emit(false)
      
    },
    erro =>{
      window.sessionStorage.clear()
      this.usuarioAutenticado = false
      this.infoErradas.emit(true)
    })
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}

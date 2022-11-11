import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogin } from '../shared/models/request-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:8080/PetShop"
  constructor(private http:HttpClient) { }

  login(requestLogin: RequestLogin){
    return this.http.get<any>(`${this.apiUrl}/login?email=${requestLogin.email}&password=${requestLogin.password}`)
  }
}

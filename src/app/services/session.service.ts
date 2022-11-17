import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  getSession(){
    let userstring = window.sessionStorage.getItem('session')
  
    if(typeof userstring === 'string'){
      return JSON.parse(userstring)
    }
  }
}

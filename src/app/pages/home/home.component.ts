import { Component, OnInit } from '@angular/core';
import { sequenceEqual } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public session!: User
  constructor() { }

  ngOnInit(): void {
    this.session = new User()
    this.getSession()
  }
  getSession(){
    let userstring = window.sessionStorage.getItem('session')
    console.log(userstring)
    let user
    if(typeof userstring === 'string'){
      console.log("aaa")
      this.session = JSON.parse(`{"name":"Moitinha PetShop", "logo":"https://cdn.discordapp.com/attachments/860278451890159647/931724711736528926/meugif.gif?width=676&height=676"}`)
      console.log(this.session)
    }
  }
}

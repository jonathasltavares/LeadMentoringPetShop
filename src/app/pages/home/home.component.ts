import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sequenceEqual } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public session!: User
  constructor(private route: Router) { }
  public url!:string
  ngOnInit(): void {
    this.route.navigate(['/home/produtos'])
    console.log(this.route.url)
    this.url = this.route.url
    this.session = new User()
    this.getSession()
  }
  getSession(){
    let userstring = window.sessionStorage.getItem('session')
    
    if(typeof userstring === 'string'){
      this.session = JSON.parse(userstring)
    }
  }
}

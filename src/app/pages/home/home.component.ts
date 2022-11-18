import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { sequenceEqual } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public session!: User
  public rota:string = ''
  constructor(public route: Router, private sessionService: SessionService) { }
  public url!:string
  ngOnInit(): void {
    this.session = new User()
    this.session = this.sessionService.getSession()
    this.route.events.subscribe(data =>{
      if(this.route.url.includes('produtos')){this.rota = 'produtos'}
      else if(this.route.url.includes('pets')){this.rota='pets'}
    })
  }

}

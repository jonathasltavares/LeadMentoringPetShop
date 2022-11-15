import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RotaAtualService {

  constructor(private route:Router) { }

  routeNow(){
    return this.route.url
  }
}

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private paginaAtual!:string
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ){}
  
  setTitle(){
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
        .pipe(map(() => this.activatedRoute))
          .pipe(
            map((route) => {
              while (route.firstChild) route = route.firstChild;
              return route;
            })
          )
            .pipe(switchMap((route) => route.data))
              .subscribe((event) => this.titleService.setTitle(event['titulo']));
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sequenceEqual } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { SessionService } from 'src/app/services/session.service';
import { RequestProducts } from 'src/app/shared/models/request-products';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-registrar-prod',
  templateUrl: './registrar-prod.component.html',
  styleUrls: ['./registrar-prod.component.css']
})
export class RegistrarProdComponent implements OnInit {
  public requestProduto!:RequestProducts
  public session!:User
  constructor(private productsService:ProductsService, private sessionService: SessionService, private route:Router) {
    this.requestProduto= new RequestProducts()
   }

  ngOnInit(): void {
    this.session = new User()
    this.session = this.sessionService.getSession()
  }

  cadastrarProduto(){
    this.requestProduto.petshop = {"id":this.session.id}
    this.productsService.save(this.requestProduto)
    .subscribe(
      resultado =>{
        window.alert("Produto cadastrado")
        this.route.navigate(['/home/produtos'])
      }, erro =>{
        console.log(erro)
      }
    )
  }
}

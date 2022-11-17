import { Component, OnInit } from '@angular/core';
import { sequenceEqual } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { SessionService } from 'src/app/services/session.service';
import { Produtos } from 'src/app/shared/models/produtos';
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
  constructor(private productsService:ProductsService, private sessionService: SessionService) {
    this.requestProduto= new RequestProducts()
   }

  ngOnInit(): void {
    this.session = new User()
    this.session = this.sessionService.getSession()
  }

  cadastrarProduto(){
    this.requestProduto.petshop = {"id":this.session.id}
    console.log(this.requestProduto)
    this.productsService.save(this.requestProduto)
    .subscribe(
      resultado =>{
        window.alert("Produto cadastrado")
      }, erro =>{
        console.log(erro)
      }
    )
  }
}

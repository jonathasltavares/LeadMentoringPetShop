import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Produtos } from 'src/app/shared/models/produtos';
declare var window: any;

@Component({
  selector: 'app-ver-mais-prod',
  templateUrl: './ver-mais-prod.component.html',
  styleUrls: ['./ver-mais-prod.component.css']
})
export class VerMaisProdComponent {
  public produto!:Produtos
  formModal: any;
  public id!:string
  constructor(private produtoService: ProductsService,private activatedRoute : ActivatedRoute, private route:Router, private titleService: Title){
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if(typeof id === 'string'){
      this.id = id
      this.produtoService.getById(id)
    .subscribe(result =>{
      this.produto = result
      this.titleService.setTitle(this.produto.name)
    })
    }

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('DeleteModal')
    );
  
  }

  deletarProduto(id:string){
    this.produtoService.deleteById(id).subscribe(
      resultado =>{

      }, erro =>{
        if(erro.status == 200){
          this.formModal.hide();
          window.alert("Produto deletado")
          this.route.navigate(['/home/produtos'])
        }
      }
    )
  }

  openFormModal() {
    this.formModal.show();
  }
  
  editarNav(id:string){
    this.route.navigate([`/home/produtos/editar/${id}`])
  }
}

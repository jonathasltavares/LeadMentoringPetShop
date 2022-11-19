import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() idProd:string | undefined;
  public breadcrumb!:string
  public produtos: boolean = false
  constructor(private titleService: Title, private activatedRoute: ActivatedRoute, private produtoService: ProductsService) { 
  }

  ngOnInit(): void {
    this.breadCrumbFunction()
  }

  breadCrumbFunction(){
    let Title = this.titleService.getTitle()
    if(Title == ':id'){
      if(this.idProd)
      this.produtoService.getById(this.idProd).subscribe(result =>{
        this.breadcrumb = result.name
        this.produtos = false
      })
    }else if(Title == 'Produtos'){
      this.produtos = true
    }
    else{
      this.breadcrumb = Title
      this.produtos = false
    }
    
  }
  
}
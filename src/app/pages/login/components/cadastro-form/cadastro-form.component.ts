import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetshopServiceService } from 'src/app/services/petshop-service.service';
import { RequestCadastro } from 'src/app/shared/models/request-cadastro';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  requestCadastro!: RequestCadastro
  public senhaDiferente: boolean = false
  constructor(private router: Router, private petshopService: PetshopServiceService) { 
  }

  ngOnInit(): void {
    this.requestCadastro = new RequestCadastro()
  }

  cadastro(){
    let confsenha = document.getElementById("text-input-confirSenha") as HTMLInputElement
    if(this.requestCadastro.password != confsenha.value){
      this.senhaDiferente = true
    }else{
      this.petshopService.save(this.requestCadastro).subscribe(
        resultado =>{
          this.senhaDiferente = false
          this.router.navigate(['login'])
        }, erro =>{
          console.log(erro)
        }
      )
    }
  }
}

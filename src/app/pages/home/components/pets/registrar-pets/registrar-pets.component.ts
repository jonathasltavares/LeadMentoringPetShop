import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';
import { SessionService } from 'src/app/services/session.service';
import { RequestPets } from 'src/app/shared/models/request-pets';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-registrar-pets',
  templateUrl: './registrar-pets.component.html',
  styleUrls: ['./registrar-pets.component.css']
})
export class RegistrarPetsComponent implements OnInit {
  public requestPets!:RequestPets
  public session!:User
  public page = "pet"
  constructor(private petsService:PetsService, private sessionService: SessionService, private route:Router) {
    this.requestPets= new RequestPets()
   }

  ngOnInit(): void {
    this.session = new User()
    this.session = this.sessionService.getSession()
  }

  cadastrarPets(){
    this.requestPets.petshop = {"id":this.session.id}
    this.petsService.save(this.requestPets)
    .subscribe(
      resultado =>{
        window.alert("Pets cadastrado")
        this.route.navigate(['/home/pets'])
      }, erro =>{
        console.log(erro)
      }
    )
  }
}

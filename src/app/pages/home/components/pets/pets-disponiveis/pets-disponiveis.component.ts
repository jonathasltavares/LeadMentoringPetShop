import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';
import { SessionService } from 'src/app/services/session.service';
import { Pets } from 'src/app/shared/models/pets';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-pets-disponiveis',
  templateUrl: './pets-disponiveis.component.html',
  styleUrls: ['./pets-disponiveis.component.css']
})
export class PetsDisponiveisComponent implements OnInit {

  public pets:Pets[] = []
  public page = "pet"
  constructor(private petService: PetsService, private sessionService: SessionService, private route: Router) {  
  }

  ngOnInit(): void {
    this.getByPetshop()
  }

  getByPetshop(){
    let session: User = this.sessionService.getSession()
    this.petService.getByPetshop(session.id)
      .subscribe(result =>{
        this.pets = result.content
      })
  }
  registrar(){
    console.log(this.route.url)
    this.route.navigate(['/home/pets/registrar'])
    
  }
  verMais(id:string){
    this.route.navigate([`/home/pets/detalhes/${id}`])
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';
import { SessionService } from 'src/app/services/session.service';
import { Pets } from 'src/app/shared/models/pets';
import { RequestPets } from 'src/app/shared/models/request-pets';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-editar-pets',
  templateUrl: './editar-pets.component.html',
  styleUrls: ['./editar-pets.component.css']
})
export class EditarPetsComponent {
  public requestPets!:RequestPets
  public session!:User
  public page = "pet"
  public id = this.activatedRoute.snapshot.paramMap.get("id");
  constructor(private cd: ChangeDetectorRef,private sessionService:SessionService,private petService:PetsService,private activatedRoute : ActivatedRoute, private route:Router){
    this.session = new User()
    this.requestPets = new RequestPets()
    
  }
  ngOnInit(): void {
    this.session = this.sessionService.getSession()
    this.getPet()
  }

  updatePet(){
    if(typeof this.id === 'string'){
    this.petService.editById(this.id, this.requestPets)
    .subscribe(result =>{
        window.alert("Pet atualizado.")
        this.route.navigate([`/home/pets/detalhes/${this.id}`])
    }, erro=>{
      console.log(erro)
    })
  }
  }


  getPet(){
    if(typeof this.id === 'string'){
    this.petService.getById(this.id)
      .subscribe(result =>{
        let Pet = result as Pets
        // let form = document.getElementsByTagName('input')
        // let description = document.getElementsByTagName('textarea')
        this.requestPets.name = Pet.name
        this.requestPets.price = Pet.price
        this.requestPets.photo = Pet.photo
        this.requestPets.description = Pet.description
        this.requestPets.petshop = {"id":this.session.id}
        this.requestPets.gender = Pet.gender
        this.requestPets.weight = Pet.weight
        this.requestPets.age = Pet.age      
      })
    }
  }
}

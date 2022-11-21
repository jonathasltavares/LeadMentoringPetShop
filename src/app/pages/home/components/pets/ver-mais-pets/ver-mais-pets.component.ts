import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';
import { Pets } from 'src/app/shared/models/pets';
declare var window: any;
@Component({
  selector: 'app-ver-mais-pets',
  templateUrl: './ver-mais-pets.component.html',
  styleUrls: ['./ver-mais-pets.component.css']
})
export class VerMaisPetsComponent {
  public pets!:Pets
  formModal: any;
  public id!:string
  public page = "pet"
  constructor(private petsService: PetsService,private activatedRoute : ActivatedRoute, private route:Router, private titleService: Title){
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if(typeof id === 'string'){
      this.id = id
      this.petsService.getById(id)
    .subscribe(result =>{
      this.pets = result
      this.titleService.setTitle(this.pets.name)
    })
    }

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('DeleteModal')
    );
  
  }

  deletarPets(id:string){
    this.petsService.deleteById(id).subscribe(
      resultado =>{

      }, erro =>{
        if(erro.status == 200){
          this.formModal.hide();
          window.alert("pet deletado")
          this.route.navigate(['/home/pets'])
        }
      }
    )
  }

  openFormModal() {
    this.formModal.show();
  }
  
  editarNav(id:string){
    this.route.navigate([`/home/pets/editar/${id}`])
  }
}
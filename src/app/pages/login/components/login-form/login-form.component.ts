import { Component, OnInit } from '@angular/core';
import { PetshopServiceService } from 'src/app/services/petshop-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private petshopService: PetshopServiceService) { }

  ngOnInit(): void {
  }

  login(){
    let email = document.getElementById("text-input-email") as HTMLInputElement
    this.petshopService.getByEmail(email.value).subscribe(
      resultado => {
        console.log(resultado)
      },
      erro => {
        
      }  
    )}
}


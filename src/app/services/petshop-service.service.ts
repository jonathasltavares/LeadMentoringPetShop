import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RequestCadastro } from '../shared/models/request-cadastro';

@Injectable({
  providedIn: 'root'
})
export class PetshopServiceService {
  private apiUrl = "https://lmpetshopapi.herokuapp.com/PetShop"
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(requestCadastro: RequestCadastro){
    return this.http.post<Object>(this.apiUrl, requestCadastro);
  }

  getById(id: string){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  deleteById(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  editById(id: string, petshop:object){
    return this.http.put(`${this.apiUrl}/${id}`, petshop) 
  }
}

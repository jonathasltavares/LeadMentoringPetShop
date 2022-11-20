import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pets } from '../shared/models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiUrl = "https://lmpetshopapi.herokuapp.com/Pet"
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(requestCadastro: object){
    return this.http.post<Object>(this.apiUrl, requestCadastro);
  }

  getById(id: string){
    return this.http.get<Pets>(`${this.apiUrl}/${id}`)
  }

  deleteById(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  editById(id: string, pets:object){
    return this.http.put(`${this.apiUrl}/${id}`, pets)
  }

  getByPetshop(id:string){
    return this.http.get<any>(`${this.apiUrl}/petshop?id=${id}`)
  }
}

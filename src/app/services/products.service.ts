import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = "https://lmpetshopapi.herokuapp.com/Product"
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(requestCadastro: object){
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

  getByPetshop(id:string){
    return this.http.get<any>(`${this.apiUrl}/petshop?id=${id}`)
  }
}
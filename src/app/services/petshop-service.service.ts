import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetshopServiceService {
  private apiUrl = "http://localhost:8080/PetShop"
  constructor(private http:HttpClient) { }

  getByEmail(email:string){
    return this.http.get<any>(`${this.apiUrl}/login?email=${email}`)
  }
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(petshop: object){
    return this.http.post<Object>(this.apiUrl, petshop);
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

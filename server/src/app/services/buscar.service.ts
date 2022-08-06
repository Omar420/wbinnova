import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  API_URI = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  buscarZapatos() {
    return this.http.get(`${this.API_URI}/shoes`)
  }

  buscarZapatosId(id: string) {
    return this.http.get(`${this.API_URI}/shoes/${id}`)
  }

  aggZapatosId(data: any) {
    return this.http.post(`${this.API_URI}/shoes`, data)
  }

  updateZapatosId(id: string, data: any) {
    return this.http.put(`${this.API_URI}/shoes/${id}`, data)
  }

  removeZapatos(id: string) {
    return this.http.delete(`${this.API_URI}/shoes/${id}`)
  }
}

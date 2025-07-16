import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(data: { name: string; email: string; message: string }) {
    return this.http.post('https://portfolio-backend-5zdy.onrender.com/entries', data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://your-api-url.com/api';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, user);
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
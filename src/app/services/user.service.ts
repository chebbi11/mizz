import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:8075/authentication'
  constructor(private http: HttpClient) { }

  register(registerRequest: any) {
    return this.http.post<User>(`${this.URL}/register`, registerRequest);
  }
  sendCode(email: string) {
    return this.http.post(`${this.URL}/send-code`, email);
  }
  verifyCode(email: string, code: number) {
    const body = {
      email: email,
      code: code
    };
    return this.http.post(`${this.URL}/verify-code`, body);
  }
}

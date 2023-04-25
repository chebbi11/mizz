import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {AuthenticationRequest, AuthenticationResponse, User} from "../models/User";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:8075/authentication';
  private URL1 = 'http://localhost:8075/user';
  private URL2 = 'http://localhost:8075/ban-user';
  private tokenKey = 'token';
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

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
  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.URL}/authenticate`, request);
  }
  uploadLogo(file: File, email: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    return this.http.post(`${this.URL1}/uploadLogo`, formData);
  }
  getUserLogo(email: string): Observable<any> {
    const url = `${this.URL1}/${email}/logo`;
    return this.http.get(url, { responseType: 'blob' });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL1);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.URL1}/show-user/${id}`;
    return this.http.get<User>(url);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.URL1}/remove-user/${id}`, { responseType: 'text' });
  }

  banUser(email: string): Observable<any> {
    return this.http.post<any>(`${this.URL2}/${email}/ban`, {});
  }

  unbanUser(email: string): Observable<any> {
    return this.http.post<any>(`${this.URL2}/${email}/unban`, {});
  }

  getBannedUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL2}/show-all-users`);
  }


}

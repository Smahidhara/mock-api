import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts/${id}`);
  }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts/${postId}/comments`);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/comments`, comment);
  }
}
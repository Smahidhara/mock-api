import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  getPostDetails(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${postId}`);
  }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts/${postId}/comments`);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/comments`, comment);
  }
}
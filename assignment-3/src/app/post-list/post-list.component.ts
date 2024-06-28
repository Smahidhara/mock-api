import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: any[] = []; 

  constructor (private apiService: ApiService ) {}

  ngOnInit(): void {
      this.apiService.getPosts().subscribe(posts => {
        this.posts = posts; 
      }); 
  }

}

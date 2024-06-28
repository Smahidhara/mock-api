import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  postId!: number ; 
  posts: any[] = []; 

  constructor (
    private router: Router, 
    private apiService: ApiService ) {}

  ngOnInit(): void {
      this.apiService.getPosts().subscribe(posts => {
        this.posts = posts; 
      }); 
  }

  showPostDetails(postId: number) {
    this.router.navigate(['/post', postId]); 
  }

  handleKeyPress(event: KeyboardEvent, postId: number) {
    if (event.key === 'Enter') {
      this.showPostDetails(postId); 
    }  
  }
}

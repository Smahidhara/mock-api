import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit{
  postId!: number ; 
  post: any; 
  comments: any[] = [];
  showCommentForm: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe (params => {
        this.postId = +params['id'];
        this.loadPostDetails();
      });
  }

  loadPostDetails () {
    this.apiService.getPostDetails(this.postId).subscribe ((post: any) => {
      this.post = post; 
    }); 

    this.apiService.getComments(this.postId).subscribe (comments => {
      this.comments = comments; 
    }); 
  }

  addComment (name: string, email: string, body: string) {
    const newComment = {
      postId: this.postId,
      name: name,
      email: email,
      body: body
    }; 

    this.apiService.addComment(newComment).subscribe(comment => {
      this.comments.unshift(comment);                                //add new comment to the beginning of the list 
    });
  }

}

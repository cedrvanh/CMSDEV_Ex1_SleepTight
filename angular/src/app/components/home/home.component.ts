import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HashtagsService } from 'src/app/services/hashtags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hashtags: any;

  constructor(
    private authService: AuthService,
    private hashtagService: HashtagsService,
    private router: Router) { }

  ngOnInit() {
    console.log('Authenticated: ', this.authService.isAuthenticated());
    this.getHashtags();
  }

  getHashtags() {
    this.hashtagService.getHashtagPosts()
      .subscribe(res => {
        this.hashtags = res;
      });
  }

  goTo(route) {
    this.router.navigate([`/${route}`]);
  }
}

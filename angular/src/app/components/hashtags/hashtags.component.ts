import { Component, OnInit } from '@angular/core';
import { HashtagsService } from 'src/app/services/hashtags.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.scss']
})
export class HashtagsComponent implements OnInit {
  public hashtags;

  constructor(private hashtagsService: HashtagsService) { }

  ngOnInit() {
    this.getHashtagPosts();
  }

  getHashtagPosts() {
    this.hashtagsService.getHashtagPosts()
      .subscribe(res => {
        this.hashtags = res;
        console.log(this.hashtags[0].acf.likes);
      });
  }

  countLikes(likes: any) {
    return likes.length;
  }

  // sortPosts(term) {
  //   const value = term.target.value;
  //   if (value === 'likes') {
  //     this.hashtags.sort((a, b) => {
  //       if (a.acf.likes.length < b.acf.likes.length) {
  //         return 1;
  //       }
  //       if (a.acf.likes.length > b.acf.likes.length) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   } else if (value === 'new') {
  //     this.hashtags.sort((a, b) => {
  //       if (a.date < b.date) {
  //         return 1;
  //       }
  //       if (a.date > b.date) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   }
  // }
}

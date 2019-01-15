import { Component, OnInit } from '@angular/core';
import { HashtagsService } from 'src/app/services/hashtags.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.scss']
})
export class HashtagsComponent implements OnInit {
  public id;
  public hashtags;
  public selectedFilter = 'desc';
  constructor(
    private hashtagsService: HashtagsService,
    private userService: UserService,
    private location: Location) { }

  ngOnInit() {
    this.getHashtagPosts();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrentUser()
      .subscribe(res => {
        this.id = res.id;
      });
  }

  getHashtagPosts() {
    this.hashtagsService.getHashtagsPostsWithFilter(this.selectedFilter)
      .subscribe(res => {
        this.hashtags = res;
        console.log(this.hashtags[0].acf.likes);
      });
  }

  handleFilter() {
    this.getHashtagPosts();
  }

  clickLike(id, currentLikes) {
    let likes = currentLikes;
    let isLiked = false;

    if (!likes) {
      likes = [];
    }

    for (let i = 0; i < likes.length; i++) {
      if (likes[i] === this.id) {
          isLiked = true;
        }
    }

    if (isLiked) {
      console.log(isLiked);
      const i = likes.indexOf(this.id);
      if (i > -1) {
        likes.splice(i, 1);
      }
    } else {
      this.setLike();
      likes.push(this.id);
    }

    const data = {
      fields: {
        likes: likes,
      },
    };

    this.hashtagsService.updateHashtagPost(id, data)
      .subscribe(() =>
        this.getHashtagPosts(),
      );
  }

  countLikes(likes: any) {
    return likes.length;
  }

  setLike() {
    const like = document.getElementById('like');
    console.log(like);
    like.setAttribute('fill', 'red');
  }

  deletePost(id: number) {
    this.hashtagsService.delete(id)
      .subscribe(() => {
        console.log('Deleted');
        window.location.reload();
      });
  }
}

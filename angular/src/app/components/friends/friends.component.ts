import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public friends;
  public term: string;
  public id: number;

  constructor(
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(res => {
        this.id = res.id;
      });
    this.getAllFriends();
  }

  getAllFriends() {
    this.userService.getAllUsers()
      .subscribe(res => {
        this.friends = res;
      });
  }

  // Doesn't work yet
  // excludeCurrentUser(friends) {
  //   friends.filter((friend) => {
  //     return friend.id !== this.id;
  //   });
  // }

  searchUser(term: string) {
    console.log(this.term);
    this.userService.searchUser(term)
      .subscribe(res => {
        this.friends = res;
      });
  }
}

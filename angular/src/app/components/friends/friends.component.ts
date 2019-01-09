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

  constructor(
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    this.getAllFriends();
  }

  getAllFriends() {
    this.userService.getAllUsers()
      .subscribe(res => {
        this.friends = res;
        console.log(this.friends);
      });
  }
}

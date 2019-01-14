import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.scss']
})
export class FriendDetailComponent implements OnInit {
  public user;
  public id;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.id = +(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(this.id)
      .subscribe(res => {
        this.user = res;
        console.log(this.user);
      });
  }
}

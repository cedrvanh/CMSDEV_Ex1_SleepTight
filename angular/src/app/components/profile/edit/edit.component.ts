import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditProfileComponent implements OnInit {
  public user;
  public id;
  public username;
  public selectedSchool;
  public schools = [
    'Arteveldehogeschool',
    'Universiteit Gent',
    'Hogeschool Gent'
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrentUser()
      .subscribe(res => {
        this.user = res;
        this.id = res.id;
        console.log(this.user);
      });
  }

  onSubmit() {
    const data = {
      username: this.username,
      fields: {
        school: this.selectedSchool
      }
    };

    this.userService.postFields(this.id, data)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/profile']);
      });
  }

  goBack() {
    this.location.back();
  }
}

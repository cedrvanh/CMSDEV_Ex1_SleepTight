import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})

export class NavComponent implements OnInit {
  @Input() title;

  public menuOpen: HTMLElement;
  public menuClosed: HTMLElement;
  public menuList: HTMLElement;

  public toggled: boolean;
  public id: number;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.menuOpen = document.getElementById('menuOpen');
    this.menuClosed = document.getElementById('menuClose');
    this.menuList = document.querySelector('.nav__side');
  }

  toggleNav()  {
    if (!this.toggled) {
      this.menuList.style.left = '0';
      this.toggled = true;
    } else {
      this.menuList.style.left = '-100%';
      this.toggled = false;
    }
  }

  goToProfile() {
      this.router.navigate(['profile']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/landing']);
  }
}

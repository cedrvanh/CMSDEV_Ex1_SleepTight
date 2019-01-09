import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})

export class NavComponent implements OnInit {
  public menuOpen: HTMLElement;
  public menuClosed: HTMLElement;
  public menuList: HTMLElement;
  public isToggled;

  constructor() { }

  ngOnInit() {
    this.menuOpen = document.getElementById('menuOpen');
    this.menuClosed = document.getElementById('menuClose');

    this.menuOpen.addEventListener('click', this.toggleNav);
    this.menuClosed.addEventListener('click', this.toggleNav);
  }

  toggleNav()  {
    this.menuList = document.querySelector('.nav__side');

    if (!this.isToggled) {
      this.menuList.style.left = '0';
      this.isToggled = true;
    } else {
      this.menuList.style.left = '-100%';
      this.isToggled = false;
    }
  }
}

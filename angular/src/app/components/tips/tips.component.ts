import { Component, OnInit } from '@angular/core';
import { TipsService } from 'src/app/services/tips.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {
  public tips = [];
  // public selectedTab: all;

  constructor(private tipsService: TipsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getTips();
    // this.selectTab();
  }

  getTips() {
    this.tipsService.getTips()
      .subscribe(res => {
        this.tips = res;
        console.log(this.tips);
      });
  }

  // selectTab() {
  //   const tags = document.querySelectorAll('.tag');
  //   const types = [];

  //   tags.forEach((tag) => {
  //     types.push(
  //       tag.getAttribute('data-type')
  //     );
  //   });
  //   console.log(types[0]);
  //   this.selectedTab = 'text';

  // }
}

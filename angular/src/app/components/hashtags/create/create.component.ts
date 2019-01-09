import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class HashtagCreateComponent implements OnInit {
  public selectedFile: File;

  constructor() { }

  ngOnInit() {
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {

  }
}

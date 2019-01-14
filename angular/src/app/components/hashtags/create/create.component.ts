import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HashtagsService } from 'src/app/services/hashtags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class HashtagCreateComponent implements OnInit {
  public hashtags;
  public selectedFile: File;
  public selectedHashtag;
  public error = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private hashtagService: HashtagsService
  ) { }

  ngOnInit() {
    this.hashtagService.getHashtags()
      .subscribe(res => {
        this.hashtags = res;
      });
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (!(this.selectedFile && this.selectedHashtag)) {
      this.error = !this.error;
    } else {
      const HTTP_OPTIONS = {
        Authorization: `Bearer ${this.authService.getToken()}`,
        'cache-control': 'no-cache',
        'Content-Type': this.selectedFile.type,
        'Content-Disposition': `attachment;filename=${this.selectedFile.name}`,
        Enctype: 'multipart/form-data',
      };

      const post = {
        name: this.selectedHashtag,
        file: this.selectedFile
      };

      this.onUpload(post, HTTP_OPTIONS);
    }
  }

  onUpload(post, headers) {
    const data = this.setAsFormData(post);

    this.hashtagService.uploadPhoto(data, headers)
      .subscribe(res => {
        console.log(res);
        const body = {
          hashtags: this.selectedHashtag,
          featured_media: res.id
        };

        this.hashtagService.postHashtagPost(body)
          .subscribe(() => {
            this.router.navigate(['/hashtags']);
          });
      });
  }

  setAsFormData(postData: object): FormData {
    const formData = new FormData();
    for (const key of Object.keys(postData)) {
      formData.append(key, postData[key]);
    }
    return formData;
  }

}

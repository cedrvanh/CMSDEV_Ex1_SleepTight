import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.authService.logout();

    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname:  ['', Validators.required],
      username:  ['', Validators.required],
      email:     ['', Validators.email],
      password:  ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const data = {
      firstname: this.f.firstname.value,
      lastname:  this.f.lastname.value,
      username:  this.f.username.value,
      email:     this.f.email.value,
      password:  this.f.password.value
    };

    console.log(this.f.password.value);
  }
}

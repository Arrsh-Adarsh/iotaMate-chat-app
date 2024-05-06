import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  hideP = true;
  hidePc = true;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userFullname: new FormControl(null),
      username: new FormControl(null),
      emailOrPhone: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
    });
  }

  signupSubmit() {
    console.log(this.signupForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MaterialModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  hide = true;

  loginForm!: FormGroup;

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    // });

    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  loginSubmit() {
    console.log(this.loginForm.value);
  }
}

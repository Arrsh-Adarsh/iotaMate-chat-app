import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [MaterialModule, LoginFormComponent, SignupFormComponent],
})
export class LoginComponent implements OnInit {
  selectedTab = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedTab =
      this.router.routerState.snapshot.url === '/login' ? 0 : 1;
  }
}

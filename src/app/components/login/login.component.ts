import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    MaterialModule,
    LoginFormComponent,
    SignupFormComponent,
    FooterComponent,
    RouterLink,
    RouterOutlet,
  ],
})
export class LoginComponent implements OnInit {
  isLoginTab = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoginTab =
      this.router.routerState.snapshot.url === '/login' ? true : false;
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }
}

import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input()
  title!: string;

  routerLinks = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'contact', label: 'Contact' },
    { path: 'profile', label: 'Profile' },
  ];
}

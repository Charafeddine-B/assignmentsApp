import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router  } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './shared/auth.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatSlideToggleModule,NavbarComponent,FooterComponent,LoginComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Application de gestion des devoirs';

  ngOnInit(): void {
    initFlowbite();
  }
  constructor(private authService: AuthService, private router: Router) { }

  onLoginChange() {
    if(!this.authService.loggedIn) {
      this.authService.logIn();
    }
    else {
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }
}

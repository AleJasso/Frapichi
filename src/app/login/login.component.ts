import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isAdmin = environment.isAdmin;
  correo = "";

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.correo}`);
  }

}

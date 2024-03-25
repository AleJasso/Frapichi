import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environments';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fp';
  isAdmin = environment.isAdmin;

  constructor(){

  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.isAdmin}`);
    Swal.fire("SweetAlert2 is working!");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.authService.login();
    this.router.navigate(['/home']);
  }
}

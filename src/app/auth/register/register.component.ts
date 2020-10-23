import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(){
    
    //save user
    this.authService.login();
    this.router.navigate(['/home']);
  }

}

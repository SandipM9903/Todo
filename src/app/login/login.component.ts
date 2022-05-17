import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'advann'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Dependency Injection
  constructor(private router: Router,
    private hardcodeAutheticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    // if (this.username === 'sandip' && this.password === 'sandip') {
    if (this.hardcodeAutheticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page using router
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}

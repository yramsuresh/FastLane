import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from './_services';
import { User, Role } from './_models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontLane';
  // compType: any;
  loginpage = false;
  role: any;
  currentUser: User;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }
  get isAdmin() {
    this.role = localStorage.getItem('data');
    if (this.currentUser && this.currentUser.role === this.role) {
      return this.currentUser && this.currentUser.role === this.role;
    }
  }

  ngOnInit(): void {}
}

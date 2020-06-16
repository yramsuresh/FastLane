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
  // loginpage = false;
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
    if (this.currentUser && this.currentUser.role === Role.Admin) {
      return this.currentUser && this.currentUser.role === Role.Admin;
    } else {
      return this.currentUser && this.currentUser.role === Role.User;
    }
  }

  ngOnInit(): void {
    // this.router.events.subscribe((val) => {
    //   if (this.location.path() !== '') {
    //     this.compType = this.location.path().replace('/', '');
    //     console.log(this.compType);
    //     if (this.compType === 'login') {
    //       this.loginpage = true;
    //     } else {
    //       this.loginpage = false;
    //     }
    //   }
    // });
  }
}

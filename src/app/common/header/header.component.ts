import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';
import { User, Role } from '../../_models';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}

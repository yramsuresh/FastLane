import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontLane';
  compType: any;
  loginpage = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (this.location.path() !== '') {
        this.compType = this.location.path().replace('/', '');
        console.log(this.compType);
        if (this.compType === 'login') {
          this.loginpage = true;
        } else {
          this.loginpage = false;
        }
      }
    });
  }
}

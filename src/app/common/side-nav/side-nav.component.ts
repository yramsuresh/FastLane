import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  compType: any;
  compTypeDetails: any;
  activeComponent = false;
  activeSolution = false;
  activeBestPractice = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  onButtonClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (this.location.path() !== '') {
        this.compType = this.location.path().replace('/', '');
        if (this.compType.indexOf('?') === -1) {
          this.getUrlType(this.compType);
        } else {
          const strValue = this.compType.substr(this.compType.indexOf('?') + 1);
          const params = strValue.split('&');
          const paramsDetails = params[1].split('=');
          this.compTypeDetails = paramsDetails[1];
          this.getUrlType(this.compTypeDetails);
        }
      }
    });
  }
  getUrlType(compType: string): void {
    if (compType === 'solutions') {
      this.activeSolution = true;
      this.activeBestPractice = false;
      this.activeComponent = false;
    } else if (compType === 'bestPractices') {
      this.activeBestPractice = true;
      this.activeSolution = false;
      this.activeComponent = false;
    } else if (compType === 'components') {
      this.activeBestPractice = false;
      this.activeSolution = false;
      this.activeComponent = true;
    } else if (compType === 'dashboard') {
      this.activeBestPractice = false;
      this.activeSolution = false;
      this.activeComponent = false;
    } else if (compType === 'Admin') {
      this.activeBestPractice = false;
      this.activeSolution = false;
      this.activeComponent = false;
    }
  }
}

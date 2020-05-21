import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from '../component-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  componentData: any;
  components: any;
  solutions: any;
  bestPractices: any;
  loading = true;
  comp: any;

  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}

  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.components = this.componentData.components;
      this.solutions = this.componentData.solutions;
      this.bestPractices = this.componentData.bestPractices;
    });
    this.loading = false;
  }

  navigate(compType, tileId) {
    this.router.navigate(['/details'], {
      queryParams: { tile: tileId, compType: compType },
    });
  }
  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }
}

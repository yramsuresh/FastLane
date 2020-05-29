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
  imageUrl: any;
  comp: any;
  list: any;
  ifComponents = true;
  ifSolutions = true;
  ifBestPractices = true;
  searchValue: string;
  compimages = 'assets/images/thumbnails/components.png';
  solimages = 'assets/images/thumbnails/solutions.png';
  bestimages = 'assets/images/thumbnails/bestPractices.png';
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}

  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.list = Object.keys(this.componentData);
      console.log(this.componentData);
      this.components = this.componentData.components;
      this.solutions = this.componentData.solutions;
      this.bestPractices = this.componentData.bestPractices;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }
}

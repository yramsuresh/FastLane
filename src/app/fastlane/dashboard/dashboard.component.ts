import { Component, OnInit, Input } from '@angular/core';
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
  searchComponent(search) {
    this.searchValue = search;
  }
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.list = ['components', 'solutions', 'bestPractices'];
      // this.list = Object.keys(this.componentData);
      this.components = this.componentData[0];
      this.solutions = this.componentData[1];
      this.bestPractices = this.componentData[2];
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }
}

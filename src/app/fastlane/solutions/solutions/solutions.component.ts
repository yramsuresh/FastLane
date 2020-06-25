import { Component, OnInit } from '@angular/core';
// import { ComponentServicesService } from 'src/app/fastlane/component-services.service';
import { Router } from '@angular/router';
import { SolutionService } from './solution.service';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  componentData: any;
  solutions: any;
  loading = true;
  currentData: any;
  comp: any;
  list: any;
  searchValue: string;
  solimages = 'assets/images/thumbnails/solutions.png';
  constructor(
    private componentservices: SolutionService,
    private router: Router
  ) {}
  searchComponent(search) {
    this.searchValue = search;
  }
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      console.log(data);
      this.componentData = data;
      // this.list = Object.keys(this.componentData);
      this.list = ['components', 'solutions', 'bestPractices'];
      this.solutions = this.componentData;
      this.currentData = this.solutions;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }
}

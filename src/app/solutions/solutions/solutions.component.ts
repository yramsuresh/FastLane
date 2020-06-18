import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/component-services.service';
import { Router } from '@angular/router';
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
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}
  searchComponent(search) {
    this.searchValue = search;
  }
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.list = Object.keys(this.componentData);
      this.solutions = this.componentData.solutions;
      this.currentData = this.solutions;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }
}

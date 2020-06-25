import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestPracticeService } from './best-practice.service';
@Component({
  selector: 'app-bestpractice',
  templateUrl: './bestpractice.component.html',
  styleUrls: ['./bestpractice.component.scss'],
})
export class BestpracticeComponent implements OnInit {
  componentData: any;
  bestPractices: any;
  loading = true;
  currentData: any;
  list: any;
  searchValue: string;
  bestimages = 'assets/images/thumbnails/bestPractices.png';
  constructor(
    private componentservices: BestPracticeService,
    private router: Router
  ) {}
  searchComponent(search) {
    this.searchValue = search;
  }
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      // this.list = Object.keys(this.componentData);
      this.list = ['components', 'solutions', 'bestPractices'];
      this.bestPractices = this.componentData;
      this.currentData = this.bestPractices;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }
}

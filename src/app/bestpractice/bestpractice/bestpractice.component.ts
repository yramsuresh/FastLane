import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/component-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bestpractice',
  templateUrl: './bestpractice.component.html',
  styleUrls: ['./bestpractice.component.scss'],
})
export class BestpracticeComponent implements OnInit {
  componentData: any;
  bestPractices: any;
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.bestPractices = this.componentData.bestPractices;
    });
  }
  navigate(compType, tileId) {
    this.router.navigate(['/details'], { queryParams: { tile: tileId, compType: compType }  });
  }
  ngOnInit(): void {
    this.getComponentData();
  }
}

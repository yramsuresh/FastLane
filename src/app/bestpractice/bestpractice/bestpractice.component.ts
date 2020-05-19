import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/component-services.service';

@Component({
  selector: 'app-bestpractice',
  templateUrl: './bestpractice.component.html',
  styleUrls: ['./bestpractice.component.scss'],
})
export class BestpracticeComponent implements OnInit {
  componentData: any;
  bestPratices: any;
  constructor(private componentservices: ComponentServicesService) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.bestPratices = this.componentData.bestPractices;
    });
  }
  ngOnInit(): void {
    this.getComponentData();
  }
}

import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/component-services.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  componentData: any;
  solutions: any;
  constructor(private componentservices: ComponentServicesService) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      console.log(data);
      this.componentData = data;
      this.solutions = this.componentData.solutions;
      console.log(this.solutions);
    });
  }

  ngOnInit(): void {
    this.getComponentData();
  }
}

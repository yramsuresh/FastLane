import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from '../component-services.service';

@Component({
  selector: 'component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  componentData: any;
  components: any;
  solutions: any;
  bestPratices: any;
  constructor(private componentservices: ComponentServicesService) {}

  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.components = this.componentData.components;
      this.solutions = this.componentData.solutions;
      this.bestPratices = this.componentData.bestPractices;
      console.log(this.components);
    });
  }

  ngOnInit(): void {
    this.getComponentData();
  }
}

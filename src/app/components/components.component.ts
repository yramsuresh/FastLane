import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from '../component-services.service';

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  componentData: any;
  components: any;
  constructor(private componentservices: ComponentServicesService) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.components = this.componentData.components;
      console.log(this.components);
    });
  }

  ngOnInit(): void {
    this.getComponentData();
  }
}

import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from '../component-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  componentData: any;
  components: any;
  loading = true;
  comp: any;
  currentData: any;
  list: any;
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.list = Object.keys(this.componentData);
      this.components = this.componentData.components;
      this.currentData = this.components;
      this.loading = false;
    });
  }
}

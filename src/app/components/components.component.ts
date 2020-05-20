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
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.components = this.componentData.components;
      console.log(this.components);
    });
  }
  navigate(tileId) {
    this.router.navigate(['/details'], { queryParams: { tileId } });
  }
  ngOnInit(): void {
    this.getComponentData();
  }
}

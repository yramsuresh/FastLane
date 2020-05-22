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
  loading = true
  comp: any;
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.components = this.componentData.components;
      this.loading = false
    });
  }
  navigate(compType, tileId) {
    this.router.navigate(['/details'], {
      queryParams: { tile: tileId, compType: compType },
    });
  }
  ngOnInit(): void {
    this.loading = true
    this.getComponentData()
  }
}

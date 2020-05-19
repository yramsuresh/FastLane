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
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      console.log(data);
      this.componentData = data;
      this.solutions = this.componentData.solutions;
      console.log(this.solutions);
    });
  }
  navigate(tileName) {
    this.router.navigate(['/details'], { queryParams: { tileName } });
  }

  ngOnInit(): void {
    this.getComponentData();
  }
}

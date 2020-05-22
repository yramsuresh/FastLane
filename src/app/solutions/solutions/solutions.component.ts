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
  loading = true;
  comp: any;
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.solutions = this.componentData.solutions;
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
    setTimeout(()=> {
      this.getComponentData()
    }, 200)
  }
}

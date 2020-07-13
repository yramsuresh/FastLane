import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from './components.service';

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
  searchValue: string;
  list: any;
  compimages = 'assets/images/thumbnails/components.png';
  constructor(
    private componentservices: ComponentsService,
    private router: Router
  ) {}
  searchComponent(search) {
    this.searchValue = search;
  }
  ngOnInit(): void {
    this.loading = true;
    this.getComponentData();
  }

  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      // this.list = Object.keys(this.componentData);
      this.list = ['components', 'solutions', 'bestPractices'];
      this.components = this.componentData;
      this.currentData = this.components;
      this.loading = false;
    });
  }
}
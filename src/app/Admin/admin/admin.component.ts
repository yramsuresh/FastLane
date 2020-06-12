import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComponentServicesService } from 'src/app/component-services.service';

let TABLE_DATA: [];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  componentData: any;
  components: any;
  solutions: any;
  bestPractices: any;
  alldata: [];
  loading = true;
  currentData: any;
  list: any;
  // dataSource: any;
  constructor(private componentservices: ComponentServicesService) {}
  displayedColumns: string[] = [
    'id',
    'cName',
    'type',
    'contributors',
    'lastUpdatedOn',
  ];
  dataSource = new MatTableDataSource(TABLE_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.list = Object.keys(this.componentData);
      this.components = this.componentData.components;
      this.solutions = this.componentData.solutions;
      this.bestPractices = this.componentData.bestPractices;
      this.alldata = this.components.concat(this.bestPractices, this.solutions);
      let value = this.alldata.sort();
      TABLE_DATA = value;
      this.dataSource = new MatTableDataSource(TABLE_DATA);
      this.loading = false;
    });
  }
  ngOnInit(): void {
    this.getComponentData();
  }
}

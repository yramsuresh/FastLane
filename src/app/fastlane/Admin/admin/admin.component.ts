import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComponentServicesService } from 'src/app/fastlane/component-services.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';

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
  itemsPerPageLabel: string;
  // dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router
  ) {}

  displayedColumns: string[] = [
    'id',
    'cName',
    'contributors',
    'type',
    'lastUpdatedOn',
  ];
  dataSource = new MatTableDataSource(TABLE_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.list = Object.keys(this.componentData);
      this.components = this.componentData[0];
      this.solutions = this.componentData[1];
      this.bestPractices = this.componentData[2];
      this.alldata = this.components.concat(this.bestPractices, this.solutions);
      let value = this.alldata.sort();
      console.log(value);
      TABLE_DATA = value;
      this.dataSource = new MatTableDataSource(TABLE_DATA);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
  }
  navigate(compType, tileId) {
    this.router.navigate(['/details'], {
      queryParams: { tile: tileId, compType: compType },
    });
  }
  ngOnInit(): void {
    this.getComponentData();
    console.log(moment(new Date()).format('DD MMMM YYYY'));
  }
}

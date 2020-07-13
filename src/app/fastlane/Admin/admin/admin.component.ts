import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComponentServicesService } from 'src/app/fastlane/component-services.service';
import { Router, ChildrenOutletContexts } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  alldata:any=[];
  loading = true;
  currentData: any;
  list: any;
  itemsPerPageLabel: string;
  // dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  displayedColumns: string[] = [
    'id',
    'cName',
    'contributors',
    'category',
    'type',
    'lastUpdatedOn',
    'actions'
  ];
  dataSource = new MatTableDataSource(TABLE_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(ele): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {element: ele}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+ result);
      this.getComponentData();
    });
  }

  getComponentData() {
    this.componentservices.getComponentData([]).subscribe((data) => { 
      this.componentData = data;
      this.alldata = [];
      // this.list = Object.keys(this.componentData);
      if(this.componentData[0].status === true){
      this.components = this.componentData[0].components;
      this.alldata = this.alldata.concat(this.components);
      }
      if(this.componentData[1].status === true){
      this.solutions = this.componentData[1].solutions;
      this.alldata = this.alldata.concat(this.solutions);
      }
      if(this.componentData[2].status === true){
      this.bestPractices = this.componentData[2].bestPractices;
      this.alldata = this.alldata.concat(this.bestPractices);
      }
      
      let value = this.alldata.sort();
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
  }

  navigateToEdit(ele) {
    this.router.navigate(['/AddForm'])
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./admin.component.scss'],
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private componentservices:ComponentServicesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    @Output() eventHandle = new EventEmitter<any>();
    onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(ele){
    this.componentservices.deleteItem(ele.id, ele.category)
    .subscribe((data:any) => { 
      if(data.message = "Component deleted successfully!") {
        
      }
    })
    this.dialogRef.close();
  }
}
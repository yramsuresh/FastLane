import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { ComponentServicesService } from '../component-services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, RequiredValidator, Validators, FormControl } from '@angular/forms';
import { SearchComponentComponent } from 'src/app/shared/search-component/search-component.component';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  componentData: any;
  components: any;
  solutions: any;
  bestPractices: any;
  loading = true;
  imageUrl: any;
  comp: any;
  list: any;
  ifComponents = true;
  ifSolutions = true;
  ifBestPractices = true;
  searchValue: string;
  formGroup: FormGroup;
  practiceList = [];
  compimages = 'assets/images/thumbnails/components.png';
  solimages = 'assets/images/thumbnails/solutions.png';
  bestimages = 'assets/images/thumbnails/bestPractices.png';
  @ViewChild(SearchComponentComponent) child:SearchComponentComponent;
  constructor(
    private componentservices: ComponentServicesService,
    private router: Router,
    public formBuilder: FormBuilder,
    public cd:ChangeDetectorRef
  ) {}
  searchComponent(search) {
    this.searchValue = search;
  }
  getComponentData(items?) {
    this.componentservices.getComponentData(items?items:[]).subscribe((data) => {
      this.componentData = [];
      this.componentData = data;
      this.list = [];
      this.list = ['components', 'solutions', 'bestPractices'];
      // this.list = Object.keys(this.componentData);
      if(this.componentData[0].status === true){
      this.components = [];
      this.components = this.componentData[0].components;
      this.cd.detectChanges();
      }
      if(this.componentData[1].status === true){
      this.solutions = [];
      this.solutions = this.componentData[1].solutions;
      }
      if(this.componentData[2].status === true){
      this.bestPractices = [];
      this.bestPractices = this.componentData[2].bestPractices;
      }
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.practiceList = ['FED', 'Mobility', 'ECM', 'WCM', 'UX']
    this.getComponentData();
    this.createForm();
  }

  valueOfSelection(item){
    alert(item)
  }

  createForm(){
    // this.formGroup = new FormGroup({
    //   'practice': new FormControl('dfasdf'),
    // })
    this.formGroup = this.formBuilder.group({
      practice: [[]]
    })
}
  
  submitSearch(){
    let dataItems = [];
    dataItems = this.formGroup.get('practice').value;
    this.getComponentData(dataItems);
  }
}

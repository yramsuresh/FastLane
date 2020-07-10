import { Component, OnInit, Input } from '@angular/core';
import { ComponentServicesService } from '../component-services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, RequiredValidator, Validators, FormControl } from '@angular/forms';
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

  constructor(
    private componentservices: ComponentServicesService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}
  searchComponent(search) {
    this.searchValue = search;
  }
  getComponentData(items?) {
    this.componentservices.getComponentData(items?items:null).subscribe((data) => {
      this.componentData = data;
      this.list = ['components', 'solutions', 'bestPractices'];
      // this.list = Object.keys(this.componentData);
      if(this.componentData[0].status === true){
      this.components = this.componentData[0].components;
      }
      if(this.componentData[1].status === true){
      this.solutions = this.componentData[1].solutions;
      }
      if(this.componentData[2].status === true){
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
    let allData = [];
      (this.formGroup.get('practice').value).forEach(element => {
        allData.push('practices[]='+element+'&&')
      });
    this.getComponentData((allData.toString()).replace (/,/g, ""));
  }
}

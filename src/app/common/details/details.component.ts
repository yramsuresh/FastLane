import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/component-services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  componentData: any;
  details: any;
  tileId: any;
  detailobject: any;
  selectedImgPath: string;
  selectedImgIndex: number;
  constructor(
    private componentservices: ComponentServicesService,
    private activatedRoute: ActivatedRoute
  ) {}
  getComponentData() {
    this.componentservices.getComponentData().subscribe((data) => {
      this.componentData = data;
      this.details = this.componentData;
      let localCompArray = this.details.components;
      let localSolArray = this.details.solutions;
      let localbestArray = this.details.bestPractices;
      let localArray = [...localCompArray, ...localSolArray, ...localbestArray];
      this.detailobject = localArray.find((comp) => {
        return comp.id === +this.tileId;
      });
      this.selectedImgPath = this.detailobject.images[0];
      this.selectedImgIndex = 0;
    });
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tileId = params['tileId'];
    });
    this.getComponentData();
  }

  chooseImg(index) {
    this.selectedImgPath = this.detailobject.images[index];
    this.selectedImgIndex = index;
  }
}

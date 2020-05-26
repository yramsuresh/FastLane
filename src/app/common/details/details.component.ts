import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/component-services.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImagedialogComponent } from '../imagedialog/imagedialog.component';
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
  compType: any;
  constructor(
    private componentservices: ComponentServicesService,
    private activatedRoute: ActivatedRoute,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private location: Location,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIcon(
      'arrow-back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/arrow_back.svg')
    ),
      iconRegistry.addSvgIcon(
        'close',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/close.svg')
      );
  }

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
      if (this.detailobject && this.detailobject.images.length > 0) {
        this.selectedImgPath = this.detailobject.images[0];
        this.selectedImgIndex = 0;
      }
    });
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tileId = params.tile;
      this.compType = params.compType;
    });
    this.getComponentData();
  }

  chooseImg(index) {
    this.selectedImgPath = this.detailobject.images[index];
    this.selectedImgIndex = index;
  }

  goToPreviousPage() {
    this.location.back();
  }

  openPreviewImgDialog() {
    this.dialog.open(ImagedialogComponent, {
      data: {
        img: this.selectedImgPath,
      },
    });
  }
}

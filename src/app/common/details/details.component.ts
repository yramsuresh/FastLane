import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/component-services.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    public dialog: MatDialog,
    private router: Router
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
      const localCompArray = this.details.components;
      const localSolArray = this.details.solutions;
      const localbestArray = this.details.bestPractices;
      const localArray = [
        ...localCompArray,
        ...localSolArray,
        ...localbestArray,
      ];
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

  openPreviewImgDialog(x, y) {
    if (x === 'image') {
      this.dialog.open(ImagedialogComponent, {
        data: {
          img: this.selectedImgPath,
          video: y,
          type: x,
        },
        width: '100%',
        height: 'auto',
        maxWidth: '90vw',
      });
    } else {
      this.dialog.open(ImagedialogComponent, {
        data: {
          img: this.selectedImgPath,
          video: y,
          type: x,
        },
        width: '100%',
        height: 'auto',
        maxWidth: '50vw',
        maxHeight: '50vw',
      });
    }
  }
}

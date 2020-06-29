import { Component, OnInit } from '@angular/core';
import { ComponentServicesService } from 'src/app/fastlane/component-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImagedialogComponent } from '../imagedialog/imagedialog.component';
import { GetDescriptionDetailsPageService } from './get-description-details-page.service';
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
  imgIndex: any;
  selectedImgArray = [];
  constructor(
    private componentservices: ComponentServicesService,
    private getdescribeDetailsPage: GetDescriptionDetailsPageService,
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

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tileId = params.tile;
      this.compType = params.compType;
    });

    this.getDescriptionFullDetailsPage(this.tileId, this.compType);
    // this.getDownloadFiles(this.filesId);
  }
  getDownloadFiles(fileId) {
    console.log(fileId);
    this.getdescribeDetailsPage.getDownloadFiles(fileId).subscribe((data) => {
      this.componentData = data;
      console.log(data);
    });
  }
  getDescriptionFullDetailsPage(tileId, compType) {
    let details = {
      compType: compType,
      Id: +tileId,
    };
    this.getdescribeDetailsPage
      .getDescriptionFullDetailsPage(details)
      .subscribe((data) => {
        this.componentData = data;
        this.detailobject = this.componentData;
        console.log('details object', this.detailobject.files);
        if (this.detailobject && this.detailobject.images.length > 0) {
          this.selectedImgPath = this.detailobject.images[0].fileURL;
          console.log(this.selectedImgPath);
          this.selectedImgArray = this.detailobject.images;
          this.selectedImgIndex = 0;
        }
      });
  }
  chooseImg(index) {
    this.selectedImgPath = this.detailobject.images[index].fileURL;
    this.imgIndex = this.detailobject.images[index].fileURL;
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
          imgArray: this.selectedImgArray,
          indexImg: this.selectedImgIndex,
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
          imgArray: this.selectedImgArray,
          indexImg: this.selectedImgIndex,
        },
        width: '100%',
        height: 'auto',
        maxWidth: '50vw',
        maxHeight: '50vw',
      });
    }
  }
}

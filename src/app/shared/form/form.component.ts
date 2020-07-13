import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ComponentServicesService } from 'src/app/fastlane/component-services.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { R3TargetBinder } from '@angular/compiler';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/_services';
import { Router } from '@angular/router';
const URL = 'http://localhost:5000/api/uploads/image';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  urls = [];
  documents = [];
  contributorsInput = [];
  contributorName: string;
  documentTitle: string;
  enableDocument = false;
  formGroup: FormGroup;
  selected = 'Components';
  titleAlert: string = 'This field is required';
  post: any;
  response: string;
  filesUrl: any;
  zipFile;
  errorMessages = false;
  loading = false;
  entityType;
  practiceList = [];
  @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private componentservices: ComponentServicesService,
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient,
    private router: Router
  ) { }
  onChangeFile(event) {
    this.zipFile.push(event.target.files[0]);
    if (this.zipFile.length > 1) {
      alert('You can upload max 1 zip file');
      return;
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.practiceList = ['Select All', 'FED', 'Mobility', 'ECM', 'WCM', 'UX'];
  }
  EnableUploadFiles(event) {
    if (event.target.value.length > 0) {
      this.enableDocument = true;
    } else {
      this.enableDocument = false;
    }
    this.documentTitle = event.target.value;
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      category: this.selected,
      cName: [null, Validators.required],
      // id: +new Date(),
      shortDesc: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(78),
        ],
      ],
      longDesc: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(500),
        ],
      ],
      images: [],
      Files: [],
      technology: [null, Validators.required],
      lastUpdatedOn: moment(new Date()).format('DD MMMM YYYY'),
      contributors: [null],
      practices: [null],
    });
  }

  get technology() {
    return this.formGroup.get('technology') as FormControl;
  }
  get cName() {
    return this.formGroup.get('cName') as FormControl;
  }

  InputContributors(event) {
    event.preventDefault();
    this.contributorName = event.target.value;
  }
  updateContributor(event, ContributorTitleInput: HTMLInputElement) {
    event.preventDefault();
    if (this.contributorName !== '') {
      this.contributorsInput.push(this.contributorName);
      this.contributorName = '';
      ContributorTitleInput.value = '';
      ContributorTitleInput.focus();
    }
  }
  //Upload Document
  uploadDocumentFiles(event, documentTitleInput: HTMLInputElement) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      element.uuid = this.genrateUUIDv4();
      this.documents.push({
        linkText: this.documentTitle,
        downloadable: element,
      });
      documentTitleInput.value = '';
      this.documentTitle = '';
      this.enableDocument = false;
    }
  }

  //upload part

  uploadFile(event) {
    if (event.length > 0) {
      if (event.length > 5) {
        alert('You can only upload a maximum of 5 files');
      } else {
        for (let index = 0; index < event.length; index++) {
          const element = event[index];
          console.log(element);
          element.uuid = this.genrateUUIDv4();
          this.urls.push(element);
        }
      }
    }
  }

  public genrateUUIDv4() {
    const f = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return f.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  deleteImages(index) {
    this.urls.splice(index, 1);
  }
  deleteContributors(index) {
    this.contributorsInput.splice(index, 1);
  }
  deleteDocuments(index) {
    this.documents.splice(index, 1);
  }
  goToPreviousPage() {
    this.router.navigate(['/Admin']);
  }
  resetFormData() {
    if (this.urls.length <= 0 && this.documents.length <= 0) {
      this.errorMessages = true;
      this.formGroup.reset();
      window.scrollTo(0, 0);
      this.contributorsInput = [];
      this.loading = false;
      setTimeout(() => {
        this.errorMessages = false;
      }, 5000);
    }
  }

  onSubmit(e, post) {
    e.preventDefault();
    if (this.urls?.length > 5) {
      alert('You can upload max 5 images');
      return;
    }
    if (this.zipFile?.length > 5) {
      alert('You can upload max 5 zip file');
      return;
    }
    post.images = this.urls;
    post.Files = this.documents;
    this.filesUrl = this.documents;
    post.contributors = this.contributorsInput;

    // post.contributors = this.contributorsArray;
    const myObjStr = JSON.stringify(post);
    this.post = myObjStr;

    // alert(JSON.parse(this.post).category);
    let cat = JSON.parse(this.post);
    if (cat.category === 'Components') {
      this.entityType = 'component';
    }
    if (cat.category === 'Solutions') {
      this.entityType = 'solution';
    }
    if (cat.category === 'Best Practice') {
      this.entityType = 'bestPractice';
    }
    this.componentservices.postFormData(this.post, this.entityType+'s/add')
      .subscribe((x: any) => {
        this.loading = true;
        for (let i = 0; i <= this.urls.length - 1; i++) {
          const uuid = this.urls[i].uuid;
          const fileData = {
            'image': this.urls[i],
            'entity': this.entityType,
            'entityId': x[this.entityType].id,
            'type': 'image'
          };
          this.componentservices.uploadFile(fileData).subscribe(
            (data: any) => {
              console.log(data);
              this.urls = this.urls.filter(url => url.uuid !== uuid);
              this.resetFormData();
            },
            (error) => {
              console.log(error);
              this.urls = this.urls.filter(url => url.uuid !== uuid);
              this.resetFormData();
            },
          );
        }

        for (let i = 0; i <= this.documents.length - 1; i++) {
          const uuid = this.documents[i].uuid;
          const fileData = {
            'file': this.documents[i].downloadable,
            'entity': this.entityType,
            'entityId': x[this.entityType].id,
            'type': 'file',
            'linkText': this.documents[i].linkText
          };
          this.componentservices.uploadFile(fileData).subscribe(
            (data: any) => {
              console.log(data);
              this.documents = this.documents.filter(doc => doc.uuid !== uuid);
              this.resetFormData();
            },
            (error) => {
              console.log(error);
              this.documents = this.documents.filter(doc => doc.uuid !== uuid);
              this.resetFormData();
            },
          );
        }
      },
      (err) => {
        console.error(err);
      }
    );

  }
}

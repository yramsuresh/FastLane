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
  @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private componentservices: ComponentServicesService,
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  onChangeFile(event) {
    this.zipFile.push(event.target.files[0]);
    if (this.zipFile.length > 1) {
      alert('You can upload max 1 zip file');
      return;
    }
  }

  ngOnInit(): void {
    this.createForm();
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
      type: [null, Validators.required],
      lastUpdatedOn: moment(new Date()).format('DD MMMM YYYY'),
      contributors: [null, Validators.required],
    });
  }

  get type() {
    return this.formGroup.get('type') as FormControl;
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
          this.urls.push(element);
        }
      }
    }
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
    this.filesUrl = this.documents[0].downloadable;
    post.contributors = this.contributorsInput;

    // post.contributors = this.contributorsArray;
    const myObjStr = JSON.stringify(post);
    this.post = myObjStr;

    // alert(JSON.parse(this.post).category);
    let cat = JSON.parse(this.post);
    const formData = new FormData();
    if (cat.category === 'Components') {
      this.componentservices.postFormData(this.post, 'components').subscribe(
        (x: any) => {
          this.loading = true;
          console.log(x);
          // Add uploaded file to the form data
          for (let i = 0; i <= this.urls.length - 1; i++) {
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            formData.append('image', this.urls[i]);
            formData.append('entity', 'component');
            formData.append('entityId', x.component.id);
            const endPoint = 'http://localhost:5000/api/uploads/image';
            const headers = new HttpHeaders({
              'x-access-token': this.authenticationService.currentUserValue
                .token,
            });
            this.httpClient.post(endPoint, formData, { headers }).subscribe(
              (data: any) => {
                console.log(data);
                this.errorMessages = true;
                this.formGroup.reset();
                setTimeout(() => {
                  this.errorMessages = false;
                }, 5000);
              },
              (error) => {
                console.log(error);
              },
              () => {
                this.loading = false;
              }
            );
          }

          setTimeout(() => {
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            formData.append('file', this.filesUrl);
            formData.append('entity', 'component');
            formData.append('entityId', x.component.id);
            formData.append('linkText', 'Source Code');
            const endPointZip = 'http://localhost:5000/api/uploads/file';
            const headers = new HttpHeaders({
              'x-access-token': this.authenticationService.currentUserValue
                .token,
            });
            this.httpClient.post(endPointZip, formData, { headers }).subscribe(
              (data: any) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              }
            );
          }, 2000);
        },
        (err) => {
          console.error(err);
        }
      );
    }
    if (cat.category === 'Solutions') {
      this.componentservices.postFormData(this.post, 'solutions').subscribe(
        (x: any) => {
          this.loading = true;
          for (let i = 0; i <= this.urls.length - 1; i++) {
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');

            formData.append('image', this.urls[i]);
            formData.append('entity', 'solution');
            formData.append('entityId', x.solution.id);
            const endPoint = 'http://localhost:5000/api/uploads/image';
            const headers = new HttpHeaders({
              'x-access-token': this.authenticationService.currentUserValue
                .token,
            });
            this.httpClient.post(endPoint, formData, { headers }).subscribe(
              (data: any) => {
                console.log(data);
                this.errorMessages = true;
                this.formGroup.reset();
                setTimeout(() => {
                  this.errorMessages = false;
                }, 5000);
              },
              (error) => {
                console.log(error);
              },
              () => {
                this.loading = false;
              }
            );
          }
          setTimeout(() => {
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            formData.append('file', this.filesUrl);
            formData.append('entity', 'solution');
            formData.append('entityId', x.solution.id);
            formData.append('linkText', 'Source Code');
            const endPointZip = 'http://localhost:5000/api/uploads/file';
            const headers = new HttpHeaders({
              'x-access-token': this.authenticationService.currentUserValue
                .token,
            });
            this.httpClient.post(endPointZip, formData, { headers }).subscribe(
              (data: any) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              }
            );
          }, 2000);
        },
        (err) => {
          console.error(err);
        }
      );
    }
    if (cat.category === 'Best Practice') {
      this.componentservices.postFormData(this.post, 'bestPractices').subscribe(
        (x: any) => {
          this.loading = true;
          for (let i = 0; i <= this.urls.length - 1; i++) {
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');

            formData.append('image', this.urls[i]);
            formData.append('entity', 'bestPractice');
            formData.append('entityId', x.bestPractice.id);
            const endPoint = 'http://localhost:5000/api/uploads/image';
            const headers = new HttpHeaders({
              'x-access-token': this.authenticationService.currentUserValue
                .token,
            });
            this.httpClient.post(endPoint, formData, { headers }).subscribe(
              (data: any) => {
                console.log(data);
                this.errorMessages = true;
                this.formGroup.reset();
                setTimeout(() => {
                  this.errorMessages = false;
                }, 5000);
              },
              (error) => {
                console.log(error);
              },
              () => {
                this.loading = false;
              }
            );
          }
          setTimeout(() => {
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            formData.append('file', this.filesUrl);
            formData.append('entity', 'solution');
            formData.append('entityId', x.bestPractice.id);
            formData.append('linkText', 'Source Code');
            const endPointZip = 'http://localhost:5000/api/uploads/file';
            const headers = new HttpHeaders({
              'x-access-token': this.authenticationService.currentUserValue
                .token,
            });
            this.httpClient.post(endPointZip, formData, { headers }).subscribe(
              (data: any) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              }
            );
          }, 2000);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}

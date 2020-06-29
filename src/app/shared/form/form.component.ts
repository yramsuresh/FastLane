import { Component, OnInit } from '@angular/core';
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
  constructor(
    private formBuilder: FormBuilder,
    private componentservices: ComponentServicesService
  ) {}

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
      id: +new Date(),
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
      Images: [],
      Files: [],
      type: [null, Validators.required],
      lastUpdatedOn: moment(new Date()).format('DD MMMM YYYY'),
      Contributors: [null, Validators.required],
      // contributors: this.formBuilder.array([this.newContributors()]),
    });
  }

  get type() {
    return this.formGroup.get('type') as FormControl;
  }
  get cName() {
    return this.formGroup.get('cName') as FormControl;
  }

  // contributors(): FormArray {
  //   return this.formGroup.get('contributors') as FormArray;
  // }
  // newContributors(): FormGroup {
  //   return this.formBuilder.group({ contributor: '' });
  // }
  // addContributors() {
  //   this.contributors().push(this.newContributors());
  // }
  // removeCont(conIndex: number) {
  //   this.contributors().removeAt(conIndex);
  // }

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
        downloadable: element.name,
      });
      documentTitleInput.value = '';
      this.documentTitle = '';
      this.enableDocument = false;
    }
  }

  //upload part

  uploadFile(event) {
    console.log(event.length);
    if (event.length > 0) {
      if (event.length > 5) {
        alert('You can only upload a maximum of 5 files');
      } else {
        for (let index = 0; index < event.length; index++) {
          const element = event[index];
          this.urls.push(element.name);
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
  onSubmit(e, post) {
    e.preventDefault();
    post.Images = this.urls;
    post.Files = this.documents;
    post.Contributors = this.contributorsInput;

    // post.contributors = this.contributorsArray;
    const myObjStr = JSON.stringify(post);
    this.post = myObjStr;
    this.componentservices.postFormData(this.post).subscribe(
      (x) => {
        alert('Succesfully data Added');
      },
      (err) => {
        alert('UnSuccesfully data Added');
        console.error(err);
      }
    );
  }
}

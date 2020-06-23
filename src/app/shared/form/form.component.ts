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
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  urls = [];
  // files = [];
  // contributorsArray = [];
  formGroup: FormGroup;
  selected = 'Components';
  titleAlert: string = 'This field is required';
  post: any;

  constructor(
    private formBuilder: FormBuilder,
    private componentservices: ComponentServicesService
  ) {}
  // onFileComplete(data: any) {
  //   console.log(data); // We just print out data bubbled up from event emitter.
  // }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      if (filesAmount > 5) {
        alert('You can only upload a maximum of 5 files');
      } else {
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          // console.log(event.target.files[i]);

          this.urls.push(event.target.files[i].name);
          // reader.onload = (event: any) => {
          //   console.log(event.target.result);
          //   this.urls.push(event.target.result);
          //   console.log();
          // };

          //    reader.readAsDataURL(event.target.files[i]);
        }
      }
    }
  }

  ngOnInit(): void {
    this.createForm();
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
      AddImage: this.urls, // [null, Validators.required],
      Images: [],
      files: this.formBuilder.array([this.newFiles()]),
      type: [null, Validators.required],
      lastUpdatedOn: new Date(),
      contributors: this.formBuilder.array([this.newContributors()]),
    });
  }

  get type() {
    return this.formGroup.get('type') as FormControl;
  }
  get cName() {
    return this.formGroup.get('cName') as FormControl;
  }
  // get contributors() {
  //   return this.formGroup.get('contributors') as FormControl;
  // }

  contributors(): FormArray {
    return this.formGroup.get('contributors') as FormArray;
  }
  newContributors(): FormGroup {
    return this.formBuilder.group({ contributor: '' });
  }
  addContributors() {
    this.contributors().push(this.newContributors());
  }
  removeCont(conIndex: number) {
    this.contributors().removeAt(conIndex);
  }

  files(): FormArray {
    return this.formGroup.get('files') as FormArray;
  }
  newFiles(): FormGroup {
    return this.formBuilder.group({
      linkText: '',
      downloadable: '',
    });
  }
  addFiles() {
    this.files().push(this.newFiles());
  }
  removefile(fileIndex: number) {
    this.files().removeAt(fileIndex);
  }

  // get AddImage() {
  //   return console.log(this.urls);
  // }

  onSubmit(post) {
    post.Images = this.urls;

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

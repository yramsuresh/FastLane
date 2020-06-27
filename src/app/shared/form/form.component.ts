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
import { FileUploader } from 'ng2-file-upload'
import * as moment from 'moment';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const URL = 'http://localhost:5000/api/uploads/image';
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
  uploader:FileUploader;
  response:string;
  allFiles=[];
  zipFile;

  constructor(
    private formBuilder: FormBuilder,
    private componentservices: ComponentServicesService,
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient
  ) {}
  // onFileComplete(data: any) {
  //   console.log(data); // We just print out data bubbled up from event emitter.
  // }
  onChangeFile(event) {
    this.zipFile.push(event.target.files[0]);
    if(this.zipFile.length>1){
      alert('You can upload max 1 zip file');
      return;
    }
  }
  onSelectFile(event:any) {
    // if (event.target.files && event.target.files[0]) {
    //   var filesAmount = event.target.files.length;
    //   if (filesAmount > 5) {
    //     alert('You can only upload a maximum of 5 files');
    //   } else {
    //     for (let i = 0; i < filesAmount; i++) {
    //       var reader = new FileReader();
    //       // console.log(event.target.files[i]);

    //       this.urls.push(event.target.files[i].name);
    //       // reader.onload = (event: any) => {
    //       //   console.log(event.target.result);
    //       //   this.urls.push(event.target.result);
    //       //   console.log();
    //       // };

    //       //    reader.readAsDataURL(event.target.files[i]);
    //     }
    //   }
    // }
    if(event.target.files.length>5){
      alert('You can upload max 5 images');
      return;
    }
    this.allFiles = [];
    console.log(event.target.files)
      if(event.target.files.length === 5){
      this.allFiles.push(event.target.files[0]);
      this.allFiles.push(event.target.files[1]);
      this.allFiles.push(event.target.files[2]);
      this.allFiles.push(event.target.files[3]);
      this.allFiles.push(event.target.files[4]);
      }
      if(event.target.files.length === 4){
      this.allFiles.push(event.target.files[0]);
      this.allFiles.push(event.target.files[1]);
      this.allFiles.push(event.target.files[2]);
      this.allFiles.push(event.target.files[3]);
      }
      if(event.target.files.length === 3){
        this.allFiles.push(event.target.files[0]);
      this.allFiles.push(event.target.files[1]);
      this.allFiles.push(event.target.files[2]);
      }
      if(event.target.files.length === 2){
      this.allFiles.push(event.target.files[0]);
      this.allFiles.push(event.target.files[1]);
      }
      if(event.target.files.length === 1){
        this.allFiles.push(event.target.files[0]);
      }
      if(event.target.files.length === 0){
        this.allFiles = null;
      }
      if(event.target.files.length>5){
        return;
      }
      
      

    
    // const formData = new FormData();
    // // Add uploaded file to the form data
    // formData.append('image', event.target.files[0], event.target.files[0].name);
    // formData.append('entity', 'component');
    // formData.append('entityId', "1");
    // const endPoint = 'http://localhost:5000/api/uploads/image';
    // const headers = new HttpHeaders({'x-access-token': this.authenticationService.currentUserValue.token });
    // this.httpClient.post(endPoint, formData, { headers })
    //   .subscribe((data: any) => {
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   });
  }

  ngOnInit(): void {
    this.createForm();
    // this.uploader = new FileUploader({
    //   url: URL,
    //   headers: [{ name: 'x-access-token', value: this.authenticationService.currentUserValue.token},
    //   { name: 'Content-Type', value: 'multipart/form-data'}],
    //   disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
    //   formatDataFunctionIsAsync: true,
    //   formatDataFunction: async (item) => {
    //     console.log(item._file)
    //     return new Promise( (resolve, reject) => {
    //       resolve({
    //         entityId: 1,
    //         entity: 'component',
    //         image: item._file,
    //         // length: item._file.size,
    //         // contentType: item._file.type,
    //       });
    //     });
    //   }
    // });
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.response = '';
    // this.uploader.response.subscribe( res => this.response = res );
    
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
      lastUpdatedOn: moment(new Date()).format('DD MMMM YYYY'),
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
    if(this.allFiles?.length>5){
      alert('You can upload max 5 images');
      return;
    }
    if(this.zipFile?.length>1){
      alert('You can upload max 1 zip file');
      return;
    }
    post.Images = this.urls;

    // post.contributors = this.contributorsArray;
    const myObjStr = JSON.stringify(post);
    this.post = myObjStr;
    alert(JSON.parse(this.post).category)
    let cat = JSON.parse(this.post);
    const formData = new FormData();
    if(cat.category === 'Components'){
      this.componentservices.postFormData(this.post, 'components').subscribe(
        (x:any) => {
    // Add uploaded file to the form data
      for(let i=0; i<=this.allFiles.length-1; i++){
      formData.delete('image');
      formData.delete('entity');
      formData.delete('entityId');
      formData.append('image', this.allFiles[i], this.allFiles[i].name);
      formData.append('entity', 'component');
      formData.append('entityId', x.id);
      const endPoint = 'http://localhost:5000/api/uploads/image';
      const headers = new HttpHeaders({'x-access-token': this.authenticationService.currentUserValue.token });
      this.httpClient.post(endPoint, formData, { headers })
        .subscribe((data: any) => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }

      setTimeout(()=>{
      formData.delete('image');
      formData.delete('entity');
      formData.delete('entityId');
      formData.append('file', this.allFiles[0]);
      formData.append('entity', 'component');
      formData.append('entityId', x.id);
      formData.append('linkText', 'Source Code');
      const endPointZip = 'http://localhost:5000/api/uploads/file';
      const headers = new HttpHeaders({'x-access-token': this.authenticationService.currentUserValue.token });
      this.httpClient.post(endPointZip, formData, { headers })
        .subscribe((data: any) => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }, 2000)
          alert('Succesfully data Added');
        },
        (err) => {
          alert('UnSuccesfully data Added');
          console.error(err);
        }
      );
    }
    if(cat.category === 'Solutions'){
      this.componentservices.postFormData(this.post, 'solutions').subscribe(
        (x:any) => {
          for(let i=0; i<=this.allFiles.length-1; i++){
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            
            formData.append('image', this.allFiles[i], this.allFiles[i].name);
            formData.append('entity', 'solution');
            formData.append('entityId', x.id);
            const endPoint = 'http://localhost:5000/api/uploads/image';
            const headers = new HttpHeaders({'x-access-token': this.authenticationService.currentUserValue.token });
            this.httpClient.post(endPoint, formData, { headers })
              .subscribe((data: any) => {
                console.log(data);
              },
              error => {
                console.log(error);
              });
          }
          setTimeout(()=>{
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            formData.append('file', this.allFiles[0]);
            formData.append('entity', 'solution');
            formData.append('entityId', x.id);
            formData.append('linkText', 'Source Code');
            const endPointZip = 'http://localhost:5000/api/uploads/file';
            const headers = new HttpHeaders({'x-access-token': this.authenticationService.currentUserValue.token });
            this.httpClient.post(endPointZip, formData, { headers })
              .subscribe((data: any) => {
                console.log(data);
              },
              error => {
                console.log(error);
              });
            }, 2000)
          alert('Succesfully data Added');
        },
        (err) => {
          alert('UnSuccesfully data Added');
          console.error(err);
        }
      );
    }
    if(cat.category === 'Best Practice'){
      this.componentservices.postFormData(this.post, 'bestPractices').subscribe(
        (x:any) => {
          for(let i=0; i<=this.allFiles.length-1; i++){
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            
            formData.append('image', this.allFiles[i], this.allFiles[i].name);
            formData.append('entity', 'bestPractice');
            formData.append('entityId', x.id);
            const endPoint = 'http://localhost:5000/api/uploads/image';
            const headers = new HttpHeaders({'x-access-token': this.authenticationService.currentUserValue.token });
            this.httpClient.post(endPoint, formData, { headers })
              .subscribe((data: any) => {
                console.log(data);
              },
              error => {
                console.log(error);
              });
          }
          setTimeout(()=>{
            formData.delete('image');
            formData.delete('entity');
            formData.delete('entityId');
            formData.append('file', this.allFiles[0]);
            formData.append('entity', 'solution');
            formData.append('entityId', x.id);
            formData.append('linkText', 'Source Code');
            const endPointZip = 'http://localhost:5000/api/uploads/file';
            const headers = new HttpHeaders({'x-access-token': this.authenticationService.currentUserValue.token });
            this.httpClient.post(endPointZip, formData, { headers })
              .subscribe((data: any) => {
                console.log(data);
              },
              error => {
                console.log(error);
              });
            }, 2000)
          alert('Succesfully data Added');
        },
        (err) => {
          alert('UnSuccesfully data Added');
          console.error(err);
        }
      );
    }
    // this.componentservices.postFormData(this.post).subscribe(
    //   (x) => {
    //     alert('Succesfully data Added');
    //   },
    //   (err) => {
    //     alert('UnSuccesfully data Added');
    //     console.error(err);
    //   }
    // );
  }
}

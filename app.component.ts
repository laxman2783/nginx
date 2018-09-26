import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'datatables.net-bs';

import 'datatables.net-buttons-bs';
import 'datatables.net-buttons/js/buttons.colVis.min';
import 'datatables.net-buttons/js/dataTables.buttons.min';
import 'datatables.net-buttons/js/buttons.flash.min';
import 'datatables.net-buttons/js/buttons.html5.min';

import { FileSelectDirective, FileUploader} from 'ng2-file-upload';




const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
name:string;
  searchForm: FormGroup;

    constructor(private fb: FormBuilder) {  }

     onAddProperty() {
    for(var i=1; i<=4; i++) {
    //  <FormArray>this.searchForm.get('properties').push(new FormControl());
    (this.searchForm.controls['properties'] as FormArray).push(new FormControl());
    }
  }

    adddrop() {
      (this.searchForm.controls['selctdropdown'] as FormArray).push(new FormControl());
  //  for(var i=1; i<=4; i++) {
     //// <FormArray>this.searchForm.get('selctdropdown').push(new FormControl());
   // }
  }

  onChange(deviceValue) {
    console.log(deviceValue);
    if(deviceValue==="text"){
      this.onAddProperty();
    }else if(deviceValue==="dropdown"){
this.adddrop();
    }
}
public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
        this.searchForm = this.fb.group({
      properties: this.fb.array([]),
       selctdropdown: this.fb.array([]),

    });
   this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
 }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 public invoiceForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
      this.invoiceForm = this._fb.group({
        itemRows: this._fb.array([this.initItemRows()])
      });
    }

    /*
    This creates a new formgroup. You can think of it as adding an empty object
    into an array. So we are pushing an object to the formarray 'itemrows' that
    has the property 'itemname'. 
    */
    initItemRows() {
        return this._fb.group({
            itemname: [''],
          isChecked:[''],
          fieldType:['']
        });
    }

    addNewRow() {
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        control.push(this.initItemRows());
    }

    deleteRow(index: number) {
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        control.removeAt(index);
    }

    submitForm(invoiceform){
    console.log(invoiceform);
  }
}

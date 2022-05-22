import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  propertyForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dailogRef : MatDialogRef<DialogComponent>) { }
  dataAdded : any;
  ngOnInit(): void {
    this.propertyForm = this.formBuilder.group({
      propertyName : ['', Validators.required],
      propertyDesc : ['',Validators.required],
      propertySize : ['',Validators.required]

    })
  }

  addProperty() {
    if(this.propertyForm.valid) {
      this.dataAdded = this.propertyForm.value;
      this.dailogRef.close(this.dataAdded);
    }
  }

}

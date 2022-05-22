import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  propertyForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.propertyForm = this.formBuilder.group({
      propertyName : ['', Validators.required],
      propertyDesc : ['',Validators.required],
      propertySize : ['',Validators.required]

    })
  }

  addProperty() {
    console.log(this.propertyForm.value);
  }

}

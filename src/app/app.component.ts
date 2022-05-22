import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Property Mangement System';

  constructor(private dialog : MatDialog) {

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%',
    });
  }
}

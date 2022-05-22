import { Component, Inject } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Property Mangement System';
  displayedColumns: string[] = ['name', 'description', 'size'];
  dataSource !: MatTableDataSource<any>;
  dataAdded: any;
  constructor(private dialog : MatDialog) {
    this.dataAdded = [];
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width:'30%',
      data: {dataAdded: this.dataAdded}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null && result != "") {
        this.dataSource = new MatTableDataSource(result);
        this.dataAdded.push(result);
        console.log(this.dataAdded);
        console.log(this.dataSource);
      }
    });
  }
  removeProperty(element : any) {
    this.dataAdded.forEach((value: any, index: any) => {
      if(value == element)
      this.dataAdded.splice(index,1);
    });
  }
}

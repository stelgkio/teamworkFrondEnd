import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeWorld } from 'src/app/models/PeopleResponse';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent implements OnInit {


  inputData: any;
  message = '';
  message1 = '';
  message3 = '';
  message2 = ''
  cancelButtonText = 'Close';
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any) {

    this.message = input.data.climate;
    this.message1 = input.data.gravity;
    this.message2 = input.data.name;
    this.message3 = input.data.terrain;
    console.log(input);
  //  this.message2 = input.data.error[0].description;
  }

  ngOnInit() {
  }
  onConfirmClick() {
    this.dialogRef.close(true);
  }

}

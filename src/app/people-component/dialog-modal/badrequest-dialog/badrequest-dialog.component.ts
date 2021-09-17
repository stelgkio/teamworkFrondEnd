import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-badrequest',
  templateUrl: './badrequest-dialog.component.html',
  styleUrls: ['./badrequest-dialog.component.scss']
})
export class BadrequestDialogComponent implements OnInit {

  inputData: any;
  message = '';
  message2 = ''
  cancelButtonText = 'Close';
  constructor(
    public dialogRef: MatDialogRef<BadrequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any) {

    this.message = input.data;
    console.log(input);
  //  this.message2 = input.data.error[0].description;
  }

  ngOnInit() {
  }
  onConfirmClick() {
    this.dialogRef.close(true);
  }
}

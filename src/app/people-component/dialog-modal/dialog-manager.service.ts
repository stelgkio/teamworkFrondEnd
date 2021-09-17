import { Injectable } from "@angular/core";
import { MatDialog, MatSnackBar, MatDialogRef, MatDialogConfig } from "@angular/material";

import { BadrequestDialogComponent } from "./badrequest-dialog/badrequest-dialog.component";

import { ConfirmDialogComponent } from "../dialog-modal/confirm-dialog/confirm-dialog.component";



@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  //TODO: https://stackblitz.com/edit/mat-dialog-generic-creation?file=app%2Fapp.component.ts
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  public constructDialog<T>(TCtor: new (...args: any[]) => T, data: any): MatDialogRef<T, any> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.width = data.width;
    const dialogRef = this.dialog.open(TCtor, dialogConfig);
    return dialogRef;
  }





  public openBadRequestDialog(inputdata: any) {
    this.constructDialog(BadrequestDialogComponent, {
      data: inputdata,
      height: '800px',
      width: '600px',
    });
  }
  public openConfirmDialog(inputdata: any) {
    this.constructDialog(ConfirmDialogComponent, {
      data: inputdata,
      height: '800px',
      width: '600px',
    });
  }


}

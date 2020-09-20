import {Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
    selector: 'message-dialog',
    templateUrl: './message-dialog.component.html',
  })
  export class MessageDialogComponent {
      constructor(@Inject(MAT_DIALOG_DATA) public data: {
        message: string
    }){

      }
  }
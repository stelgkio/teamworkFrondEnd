import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { teamWorkReducer } from 'src/app/state/teamwork.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TeamWorkEffect } from 'src/app/state/teamwork.effects';
import { UrlService } from 'src/app/helper/urlService';
import { WebApiService } from 'src/app/services/WebApiService';
import { MatFormFieldModule, MatPaginatorModule, MatTableModule, MatInputModule, MatSortModule, MatNativeDateModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { PeopleTableComponent } from './people-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogManagerService } from '../dialog-modal/dialog-manager.service';

import { BadrequestDialogComponent } from '../dialog-modal/badrequest-dialog/badrequest-dialog.component';
import { ConfirmDialogComponent } from '../dialog-modal/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [PeopleTableComponent,ConfirmDialogComponent,BadrequestDialogComponent],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    StoreModule.forFeature('teamWork',teamWorkReducer),
    EffectsModule.forFeature([TeamWorkEffect]),
  ],
  providers: [
    WebApiService,
    TeamWorkEffect,
    UrlService,
    DialogManagerService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PeopleModule { }

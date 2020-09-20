import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';

import {EnrollmentDashboardComponent} from '../components/enrollment-dashboard/enrollment-dashboard.component';
import {HeaderComponent} from '../components/header/header.component';
import {MessageDialogComponent} from '../components/message-dialog/message-dialog.component';



@NgModule({
  declarations: [    
    EnrollmentDashboardComponent,
    HeaderComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [EnrollmentDashboardComponent,HeaderComponent]
})
export class AppModule { }

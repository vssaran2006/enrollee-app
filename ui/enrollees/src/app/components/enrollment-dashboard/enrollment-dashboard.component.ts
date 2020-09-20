import {Component, OnInit} from '@angular/core';
import {CONSTANT} from '../../utilities/constants';
import {EnrollmentService} from '../../services/enrollment.service';
import {MatDialog} from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
@Component({
    selector:"enrollment-dashboard",
    templateUrl:"./enrollment-dashboard.component.html"
})

export class EnrollmentDashboardComponent implements OnInit{
    enrollees:any;
    loadStatus:string;
    
    constructor(private enrollmentService: EnrollmentService,public dialog: MatDialog){

    }
    /**
     * ngOnInit
     * Make Http call to get all enrollees
     */
    ngOnInit(){               
        this.enrollmentService.getEnrollees().subscribe((data)=>{
            this.enrollees = data;                                    
            this.loadStatus = CONSTANT.SUCCESS;            
        },(err)=>{
            
            this.loadStatus = CONSTANT.FAILURE;                        
        })
    }

    /**
     * changeStatus
     * @param event     event
     * @param enrollee  enrollee object
     * method to make update call to change the status
     */
    changeEnrolleeStatus(event:any,enrollee:any){        
        const payload = {
            "active": event.checked,
            "name": enrollee.name            
        }
        this.enrollmentService.updateEnrollee(enrollee.id,payload).subscribe(()=>{
            this.dialog.open(MessageDialogComponent,{
                data: {
                  message: 'Status Updated Successfully!!'
                }
              });       
              // Change the status after status update   - no need to go for a new call   
              enrollee.status = enrollee.getStatus(enrollee.active);
        },()=>{
            this.dialog.open(MessageDialogComponent,{
                data: {
                  message: 'Update Status Failed, Please try later!!'
                }
              });
            // Reset the status to original on failure
            enrollee.active = !enrollee.active;               
        })
    }
    /**
     * updateEnrolleeName
     * @param enrollee 
     * Method to update enrolleee name
     */
    updateEnrolleeName(enrollee:any){        
        const payload = {
            "name":enrollee.editedName,
            "active":enrollee.active
        }
        this.enrollmentService.updateEnrollee(enrollee.id,payload).subscribe(()=>{
            this.dialog.open(MessageDialogComponent,{
                data: {
                  message: 'Name Updated Successfully!!'
                }
              });
              // On success - hide edit box and update the name to edited name 
              // No need to call new http call to update 
              enrollee.showEdit = false;
              enrollee.name = enrollee.editedName;
        },()=>{
            this.dialog.open(MessageDialogComponent,{
                data: {
                  message: 'Update Name Failed, Please try later!!'
                }
              });
              // On Failure - hide edit box and update the modified name to original name
              enrollee.showEdit = false;
              enrollee.editedName = enrollee.name;                       
        })
    }
    /**
     * showEditMode
     * @param enrollee 
     */
    showEditMode(enrollee:any){
        enrollee.showEdit = true;
    }
    

}

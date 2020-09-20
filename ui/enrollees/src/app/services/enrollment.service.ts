import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Enrollee} from '../models/enrollee';
import {ApiSettings} from '../utilities/api-settings';

@Injectable({
    providedIn:'root'

})

export class EnrollmentService{
    constructor(private http: HttpClient, private apisettings:ApiSettings) { }

    /**
     * getEnrollees
     * Get Enrollees list and convert to Enrollee Model 
     */
    getEnrollees():Observable<Enrollee[]>{            
        return this.http.get<Enrollee[]>(this.apisettings.getEnrolleeUrl()).pipe(map((enrollees:Array<any>)=>{
            let res: Array<Enrollee>=[];
            enrollees.forEach((enrollee:any)=>{
                res.push(new Enrollee(enrollee.id,enrollee.name,enrollee.dateOfBirth,enrollee.active))
            })
            return res;
        }))
    }

    /**
     * getEnrolleeById
     * @param enrolleeId 
     * Get Enrollee By Id
     */
    getEnrolleeById(enrolleeId:string):Observable<Enrollee>{            
        return this.http.get<Enrollee>(this.apisettings.updateEnrolleeUrl(enrolleeId));
    }
    /**
     * updateEnrollee
     * @param enrolleeId 
     * @param payload 
     * Update Enrollee by id to change status and name
     */
    updateEnrollee(enrolleeId:string,payload:any){
        return this.http.put(this.apisettings.updateEnrolleeUrl(enrolleeId),payload);
    }
}

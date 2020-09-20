import {Injectable} from '@angular/core';
import {config} from '../core/config';


@Injectable({
    providedIn:'root'

})

export class ApiSettings{
    constructor() { }

    /**
     * getEnrolleeUrl
     * Get Enrollee Url
     */
    getEnrolleeUrl(){
        return config.baseApiUrl + "enrollees/";
    }

    /**
     * updateEnrolleeUrl
     * @param enrolleeId 
     * Update url
     */
    updateEnrolleeUrl(enrolleeId:string){
        return config.baseApiUrl + "enrollees/" + enrolleeId;
    }
}

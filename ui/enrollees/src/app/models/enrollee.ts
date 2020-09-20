export class Enrollee{
    id:string;
    name:string;
    dateOfBirth:Date;
    active:boolean;
    status:string
    showEdit:boolean= false;
    editedName:string;

    constructor(id:string,name:string,dateOfBirth:string,active:boolean){
        this.id = id;
        this.name = name;
        this.dateOfBirth = this.formatDate(dateOfBirth);
        this.active = active;
        this.status = this.getStatus(active);
        this.editedName = name;
    }

    /**
     * 
     * @param active 
     * Get status
     */
    getStatus(active:boolean){
        return active ? "Active" : "Inactive";
    }

    /**
     * 
     * @param dob 
     * Get Formatted Date
     */
    formatDate(dob:any){
        return new Date(dob);        
    }

}
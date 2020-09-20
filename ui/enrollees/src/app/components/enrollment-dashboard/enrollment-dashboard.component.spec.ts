import {TestBed,async} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {EnrollmentDashboardComponent} from '../enrollment-dashboard/enrollment-dashboard.component';

describe('EnrollmentDashboardComponent' ,()=>{
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule
          ],
          declarations: [
            EnrollmentDashboardComponent
          ],
        }).compileComponents();
      }));
    
      it('should create the app', () => {
        const fixture = TestBed.createComponent(EnrollmentDashboardComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });
})
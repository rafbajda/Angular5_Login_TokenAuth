import { Component, OnInit } from '@angular/core'; 
import { AlertService } from '../services/alert.service';
import { AlertMsg } from '../models/alertMsg.model';
@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
 
export class AlertComponent {
    message: AlertMsg;
 
    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
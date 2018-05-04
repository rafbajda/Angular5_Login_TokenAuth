import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { moveIn } from '../router.animations';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service'
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [moveIn(),],
  host: {'[@moveIn]': ''}
})

export class ProfileComponent implements OnInit {
  currentUser: User; 

  constructor(private router: Router, 
    private userService: UserService,
    private authenticationService: AuthenticationService,
) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));      
  }
  
  ngOnInit() {
  }
  logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

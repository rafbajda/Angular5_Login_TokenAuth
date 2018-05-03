import { Component, OnInit } from '@angular/core';
 
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service'
import { AuthenticationService } from '../shared/authentication.service';

import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [moveIn(),],
  host: {'[@moveIn]': ''}
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  user: any = {
    firstName: null,
    lastName: null
  }

  constructor(private router: Router, 
    private userService: UserService,
    private authenticationService: AuthenticationService,
) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));      
  }

  ngOnInit() {
      this.getUser();
  }

  logOut(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  private getUser() {
    this.userService.getById(this.currentUser.id).subscribe((usr : any) => {
    this.user.firstName = usr.firstName;
    this.user.lastName = usr.lastName;
    });
}

}

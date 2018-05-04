import { Component, OnInit, HostBinding} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { Login } from '../models/login.model';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class SignInComponent implements OnInit {
  model: Login = {
      username: null,
      password: null
  };
  loading: boolean = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

  ngOnInit() {
      this.authenticationService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseRequestOptions } from '@angular/http';

import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor'; 
 
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

import { AuthenticationService} from './services/authentication.service';
import { UserService} from './services/user.service';
import { AlertService} from './services/alert.service';

import { AppComponent }  from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { AlertComponent } from './alert/alert.component';

import { routing } from './app.routes';
 
@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        SignInComponent,
        ProfileComponent,
        AlertComponent
    ],
    providers: [
        AuthGuard,
        LoginGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
 
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }
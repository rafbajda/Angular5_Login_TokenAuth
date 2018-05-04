import { Routes, RouterModule } from '@angular/router';
 
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
 
const appRoutes: Routes = [
    { path: 'login', component: SignInComponent, canActivate: [LoginGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, 
    { path: '**', redirectTo: 'profile' }
];
 
export const routing = RouterModule.forRoot(appRoutes);
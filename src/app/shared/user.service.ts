import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { User } from './user.model';
 
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }
 
}
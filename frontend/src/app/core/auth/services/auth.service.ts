import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { LoginDto } from '../dto/login.dto';
import { AuthData } from '../dto/auth.data';
import { HttpService } from '@core/http/http.service';

@Injectable()
export class AuthService {
  path = '/api/auth';

  constructor(private http: HttpService) { }

  login(data: LoginDto): Observable<AuthData> {
    return this.http.create<AuthData>(`${this.path}/login`, data, AuthData, {
      200: 'Successfully logged in',
      400: 'Error occurred',
      401: 'User not found or password not match'
    });
  }
}

import { Injectable } from '@angular/core';
import { Question } from '../model/setquestion';
import { Observable, throwError, catchError, map } from 'rxjs';
import { baseURL } from '../share/baseurl';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService) { }

  addQuestion(question:Question): Observable<any> {
    return this.http.post(baseURL + 'question/setquestion', question);
  }

}

import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
// Observable represent a stream of given data, in this case Tasks
// rxjs library is used fro async communication between service (backend in Java or json-server) and application (angular)
// async communication - sending request and not waiting untill server will respond
// sync communication - sending request to server and waiting for a response before submitting new request
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiURL = 'http://localhost:5000/tasks' //api - aplication programming interface


  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }
}
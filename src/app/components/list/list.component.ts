import { TaskService } from './../../services/task.service';
import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/test-data';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[] = TASKS;
  tasksFromApi: Task[] = [];


  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((t) => this.tasksFromApi = t);
  }

}

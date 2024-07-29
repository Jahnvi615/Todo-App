import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  task: Task = { name: '', completedDate: '' };

  constructor(private router: Router) {}

  onSubmit() {
    const storedTasks = localStorage.getItem('tasks');
    const tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];
    const newTask = { ...this.task, id: tasks.length ? tasks[tasks.length - 1].id! + 1 : 1 };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.router.navigate(['/']);
  }
}

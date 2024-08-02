import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from './tasks.services';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  // private tasksService = new TasksService();

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompletTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}

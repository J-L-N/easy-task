import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  @Output() closeDialog = new EventEmitter<boolean>();


  //Two way binding with Signals
  // givenTitle = signal('');
  // givenSummary = signal('');
  // givenDate = signal('');

  givenTitle = '';
  givenSummary = '';
  givenDate = '';

  private tasksService = inject(TasksService)


  onCancel() {
    this.closeDialog.emit(false);
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.givenTitle,
      summary: this.givenSummary,
      date: this.givenDate
    }, this.userId );
    this.closeDialog.emit();
  }
}

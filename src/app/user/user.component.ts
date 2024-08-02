import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { type User } from './user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {

  //Signal input with small "i"
  //avatar = input<string>();

  //it van be set required but impossible to set initial value in this case.
  // avatar = input.required<string>()

  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });



  //Normal Input() functions with capital "I"
  // @Input({ required: true }) id!: string
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({required: true}) user!: User;

  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>()

  // still allows to use emit() but requires to declare a type of output
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

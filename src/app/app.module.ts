import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    SharedModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

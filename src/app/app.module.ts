import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Quiz1Component } from "../quiz1/quiz1.component";
import { Quiz2Component } from "../quiz2/quiz2.component";
import { Quiz3Component } from "../quiz3/quiz3.component";
import { Quiz4Component } from "../quiz4/quiz4.component";
import { Quiz6Component } from "../quiz6/quiz6.component";
import { Quiz7Component } from "../quiz7/quiz7.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Quiz1Component,
    Quiz2Component,
    Quiz3Component,
    Quiz4Component,
    Quiz6Component,
    Quiz7Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

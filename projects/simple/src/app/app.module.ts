import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxMapboxGLModule } from 'mapir-angular-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxMapboxGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

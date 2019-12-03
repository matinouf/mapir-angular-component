import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxMapboxGLModule } from 'mapir-angular-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",
        geocoderAccessToken: 'TOKEN'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

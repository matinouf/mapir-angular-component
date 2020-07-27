import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "mapir-angular-test";
  center: Array<number> = [51.367918, 35.712706];
  markerPosition: Array<number> = [51.367918, 35.712706];
  apiKey: string = "<YOUR API KEY>";

  clicked(e: any) {
    if ("lngLat" in e) this.markerPosition = [e.lngLat.lng, e.lngLat.lat];
  }

  dragged(e: any) {
    console.log(e._lngLat);
  }
}

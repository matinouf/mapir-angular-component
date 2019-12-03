import { Component, NgZone } from '@angular/core';
import { Marker } from 'mapbox-gl';

@Component({
  selector: 'showcase-demo',
  template: `
  <mgl-map
    [zoom]="[2]"
    [center]="[0, 0]"
    [apiKey]="apiKey"
  >
    <mgl-marker
      [lngLat]="[0, 0]"
      [draggable]="true"
      (dragEnd)="onDragEnd($event)"
    ></mgl-marker>
    <mgl-control
      *ngIf="coordinates"
      position="bottom-left"
    >
      <mat-card>
        <div>Longitude:&nbsp;{{ coordinates[0]}}</div>
        <div>Latitude:&nbsp;{{ coordinates[1]}}</div>
      </mat-card>
    </mgl-control>
  </mgl-map>
  `,
  styleUrls: ['./examples.css']
})
export class DragAMarkerComponent {
  coordinates: number[];
  color = '#3887be';
  apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ4OTkwZDZiMDU4NDU2NzVjNGRlNjIyZDRkOTEwNWI1NTlkMjNkYWU0NDJjYmZkMjdmNjM5MWFjMWE2ZTA4OWMzNmQ3NDBhZjdiNzg3YTlhIn0.eyJhdWQiOiIzNjg0IiwianRpIjoiZDg5OTBkNmIwNTg0NTY3NWM0ZGU2MjJkNGQ5MTA1YjU1OWQyM2RhZTQ0MmNiZmQyN2Y2MzkxYWMxYTZlMDg5YzM2ZDc0MGFmN2I3ODdhOWEiLCJpYXQiOjE1NjE0NDEyODMsIm5iZiI6MTU2MTQ0MTI4MywiZXhwIjoxNTY0MTE5NjgyLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.CgdC7WBCvdOXauPXejZYvphH3-UO5d2nBwozsRVXV2Mqqa6nidRW1dX9nl4CMADUB3xC0Y_IGaMBGgUOnE-omxBRqUr70zznGBQuzWagdSU5cEPA5pp_ywu7_u1TF44aPqUTVF3LsHecaHb9zo88DYP-TT5KXvlhc3-41z4YQTu2O5X6AyPCkYNo5Kv17MNMdb44Fji2-L-LJ2ew8ieVa0rWoFIAX7oVeYuOTgmb2q_Sc6KJW-Iv7TDI1ft7GahqG7yEZ_9sAmxW8szNKPALQSZYVgKpnmTOgSSy3ep8x2v1VSLItvdAOVLof0-G4etY-y1OwHp4mlR8P57MJNHNOA";

  onDragEnd(marker: Marker) {
    NgZone.assertInAngularZone();
    this.coordinates = marker.getLngLat().toArray();
  }
}

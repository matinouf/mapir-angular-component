# MapirAngularComponent
[![npm version](https://badge.fury.io/js/mapir-angular-component.svg)](https://www.npmjs.com/package/mapir-angular-component)

![Map.ir](https://map.ir/css/images/mapir-logo.png) Angular wrapper for mapbox-gl-js. Expose a bunch of component meant to be simple to use for Angular.

## Get API Key
🔑 You should first get api key from [Map.ir](https://corp.map.ir/registration/)

## Installation

```bash
npm i mapir-angular-component mapbox-gl
```

If using typescript, add mapbox-gl types:

```bash
npm install @types/mapbox-gl
```

### Add mapbox-gl CSS

Load the css of mapbox-gl (and mapbox-gl-geocoder if mglGeocoder is used)

For example, with angular-cli projects add this in `angular.json`:

```json
"styles": [
  "./node_modules/mapbox-gl/dist/mapbox-gl.css",
  "./node_modules/@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css"
  ]
```
Or in global css (called styles.css for example in angular-cli)

```css
@import "~mapbox-gl/dist/mapbox-gl.css";
@import "~@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
```

### Add Polyfill

Add this in your polyfill.ts file ([discussion](https://github.com/Wykks/ngx-mapbox-gl/issues/136#issuecomment-496224634)):

```ts
(window as any).global = window;
```

## Quick start 

### Import module

in `app.module.ts` file:

```js
import { NgxMapboxGLModule } from 'mapir-angular-component';

@NgModule({
  imports: [
    NgxMapboxGLModule
  ]
})
export class AppModule {}
```

### Set API Key

in `app.component.ts` file:

```diff
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapir-angular-test';
  center:Array<number> = [35.712706, 51.367918];
+  apiKey:string = "<YOUR API KEY>";
}
```

### Generate Component

in `app.component.html` file:

```html
<mgl-map
  [zoom]="[2]"
  [center]="center"
  [centerWithPanTo]="true"
  [interactive]="true"
  [apiKey]="apiKey"
></mgl-map>
```

[![Edit stackblitz](./assets/stackblitz.png)](https://stackblitz.com/edit/mapir-angular-component-test)

[![Edit mapir-angular-component-test](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vibrant-sound-obw3p?fontsize=14&hidenavigation=1&theme=dark)

📖 [English Documentation](https://github.com/map-ir/mapir-angular-component/wiki/Documentation)

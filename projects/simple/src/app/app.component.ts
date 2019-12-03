import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapir-angular-test';
  center:Array<number> = [35.712706, 51.367918];
  apiKey:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM0NzU5ZjVlOTZiZDc1YjNkMWRmZTA5M2JjNmNkYWZmY2ExMTg4ZDMwMTRmOWYzZWFiZjQyMTIyMzNlOTIzMzAzMjgwNGNjZDMxZjM4MTE3In0.eyJhdWQiOiIxMTQiLCJqdGkiOiIzNDc1OWY1ZTk2YmQ3NWIzZDFkZmUwOTNiYzZjZGFmZmNhMTE4OGQzMDE0ZjlmM2VhYmY0MjEyMjMzZTkyMzMwMzI4MDRjY2QzMWYzODExNyIsImlhdCI6MTU2MjQ5ODk5NiwibmJmIjoxNTYyNDk4OTk2LCJleHAiOjE1NjUxNzczOTIsInN1YiI6IiIsInNjb3BlcyI6WyJiYXNpYyJdfQ.ZKWm-NmJ9pI5eg33S5LQ2YxrpPmEfbnDm_IKXNxc-eWeYV22nayyhuvGT4qyd5Ao-E3_NcA9sl7NP5LD0gPBl6Efz2q_AsDkBPtQr8u22K3c7HSfS9msSsjHO3uKknehiTZ-agpYNoAiPWfk49DeUagw0w2EAJq3Y12pYC0yYeEYsB54s7zSFDOV8P2OqUUZS9JjF5OW4G0IsVHvyBrYCi0TRh45HallljvL3RPqmrvQUzkOYAY-3tw_zhbRgCWRdQ_tdt7D7JaK18xGrOPJfp2771YXvevsFQ39FvXZurFwcvNGrmRJxPTXyU-o92ptpkpRraI4PrFgtuTa5DYKbA";
}

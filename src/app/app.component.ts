import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaMundoComponent } from "./hola-mundo/hola-mundo.component";
import { ProbandoComponent } from "./probando/probando.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HolaMundoComponent, ProbandoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nombre-proyecto';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent as Nav } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nav],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router';
}

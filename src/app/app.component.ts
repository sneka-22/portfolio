import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutmeComponent,SkillsetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

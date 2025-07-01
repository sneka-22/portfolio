import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutmeComponent,SkillsetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';
import{WorkExperienceComponent}from './work-experience/work-experience.component';
import { BannerComponent } from './banner/banner.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutmeComponent,SkillsetComponent,WorkExperienceComponent,BannerComponent,EducationComponent,ContactComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [AboutmeComponent,SkillsetComponent,WorkExperienceComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {


  @Input() activeSection: string = 'about';
  @Output() sectionChange = new EventEmitter<string>();

  navItems = [
    { label: 'About Me', value: 'about' },
    { label: 'Skillset', value: 'skills' },
    { label: 'Work Experience', value: 'work' },
    { label: 'Education', value: 'education' },
    { label: 'Contact', value: 'contact' }
  ];

  selectSection(value: string) {
    this.sectionChange.emit(value);
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
  }
}

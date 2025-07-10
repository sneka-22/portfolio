import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
 skills: string[] = [
    'Node.js', 'JavaScript', 'TypeScript', 'Angular', 'PostgreSQL',
    'MySQL', 'Sequelize', 'AWS Lambda', 'DynamoDB', 'Express',
    'Docker', 'Git', 'GraphQL', 'Angular Material', 'Postman',
    'Jest', 'NPM'
  ];
}

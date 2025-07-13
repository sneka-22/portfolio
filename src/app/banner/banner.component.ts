import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';



@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  sections = ['home', 'about', 'skills', 'work', 'education', 'contact'];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; 
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if we're at the bottom of the page (contact section)
    if (scrollPosition + windowHeight >= documentHeight - 50) {
      currentSection = 'contact';
    } else {
      
      for (const sectionId of this.sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }
    }

    this.sections.forEach(id => {
      const link = document.getElementById('link-' + id);
      if (link) {
        if (id === currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
}

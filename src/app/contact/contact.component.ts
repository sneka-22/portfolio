import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

declare var window: any; // Add this at the top of your component

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 contactForm: FormGroup;

  @ViewChild('successToast') successToast!: ElementRef;
  @ViewChild('errorToast') errorToast!: ElementRef;

  constructor(private fb: FormBuilder,private contactService:ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: (response) => {
          // Show success toast
          this.showToast('success');
          this.contactForm.reset();
        },
        error: (error) => {
          // Show error toast
          this.showToast('error');
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  showToast(type: 'success' | 'error') {
    const toastEl = type === 'success' ? this.successToast.nativeElement : this.errorToast.nativeElement;
    const toast = new window.bootstrap.Toast(toastEl);
    toast.show();
  }
}

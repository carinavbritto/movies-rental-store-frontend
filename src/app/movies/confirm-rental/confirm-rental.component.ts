import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-confirm-rental',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './confirm-rental.component.html',
  styleUrls: ['./confirm-rental.component.scss']
})
export class ConfirmRentalComponent {
  @Input() isVisible: boolean = false;
  @Input() movieId!: string;
  @Output() onConfirm = new EventEmitter<{ name: string; email: string; phone: string }>();
  @Output() onClose = new EventEmitter<void>();

  rentalForm: FormGroup;
  phoneMask: string = '(00) 0000-00000';

  constructor(private fb: FormBuilder) {
    this.rentalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^\\d{10,11}$')
      ]]
    });

    this.rentalForm.get('phone')?.valueChanges.subscribe(value => {
      if (value.length > 10) {
        this.phoneMask = '(00) 0 0000-0000';
      } else {
        this.phoneMask = '(00) 0000-00000';
      }
    });
  }

  submitForm() {
    if (this.rentalForm.valid) {
      this.onConfirm.emit(this.rentalForm.value);
    } else {
      this.rentalForm.markAllAsTouched();
    }
  }

  closeModal() {
    this.onClose.emit();
  }
}

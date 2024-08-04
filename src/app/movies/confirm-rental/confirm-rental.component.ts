import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-confirm-rental',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './confirm-rental.component.html',
  styleUrls: ['./confirm-rental.component.scss']
})
export class ConfirmRentalComponent {
  @Input() isVisible: boolean = false;
  @Input() movieId!: string;
  @Output() onConfirm = new EventEmitter<{ name: string; email: string; phone: string }>();
  @Output() onClose = new EventEmitter<void>();

  rentalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rentalForm = this.fb.group({
      name: [''],
      email: [''],
      phone: ['']
    });
  }

  submitForm() {
    if (this.rentalForm.valid) {
      this.onConfirm.emit(this.rentalForm.value);
    }
  }

  closeModal() {
    this.onClose.emit();
  }
}

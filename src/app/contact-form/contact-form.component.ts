import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: this.fb.control('', Validators.compose([Validators.required])),
      email: this.fb.control('', Validators.compose([Validators.required])),
      phoneNumber: this.fb.control(
        '',
        Validators.compose([Validators.required])
      ),
      message: this.fb.control('', Validators.compose([Validators.required]))
    });
  }

  save() {
    console.log(this.contactForm);
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  private phoneNumberValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const valid = /^\d+$/.test(control.value);
    return valid
      ? null
      : { invalidNumber: { valid: false, value: control.value } };
  }
}

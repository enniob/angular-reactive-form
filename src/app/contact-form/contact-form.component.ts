import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
      message: this.fb.control('', Validators.compose([Validators.required]))
    });
  }

  save() {
    console.log(this.contactForm);
  }
}

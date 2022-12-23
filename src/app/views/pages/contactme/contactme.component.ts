import { Component, OnInit } from '@angular/core';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { ContactmeService } from './contactme.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
})
export class ContactmeComponent implements OnInit {
  phone = faPhone;
  emailIcon = faEnvelope;
  locationIcon = faLocationDot;
  sendIcon = faPaperPlane;

  form: FormGroup;
  submitted = false;
  isError = false;
  isSuccess = false;

  constructor(private services: ContactmeService, fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      project: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    console.log('App Loaded');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.isError = Object.keys(this.f).some((key) => this.f[key].errors);
    if (!this.isError) {
      const { email, name, message, project } = this.form.value;
      this.services.sendMail(name, email, message, project).subscribe(() => {
        this.isSuccess = true;
        this.submitted = false;
        this.isError = false;
        this.form.reset();
      });
    }
  }
}

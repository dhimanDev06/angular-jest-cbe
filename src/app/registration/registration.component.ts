import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  nameControl: FormControl = new FormControl('John', [
    Validators.required,
    Validators.maxLength(5)
  ]);

  registerForm: FormGroup | any;
  constructor(private fb: FormBuilder,public commnService:CommonService) {
    this.createForm();
  }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group(
      {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    });
  }
  submitted = false;
  get f() { return this.registerForm.controls; }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  doRegister() {
    this.submitted = true;
    if(this.registerForm.valid){
      const isRegistartion = this.commnService.registrationSubmit(this.registerForm.value);
      console.log('isRegistartion',isRegistartion);
      
      if(isRegistartion){
        this.onReset()
      }
    }
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      // console.log(control.value," --control-- ", control.errors);
      // console.log(matchingControl.value," --matchingControl-- ", matchingControl);

      if (
        matchingControl.errors &&
        !matchingControl.errors
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}

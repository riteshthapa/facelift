import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showMsgSuccess: boolean = false;
  showMsgFail: boolean = false;
  userModel = new User('', '', '', '');

  form: FormGroup;

  recaptcha: any[];

  constructor(private _submissionService: SubmissionService, private userForm: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.userForm.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      captcha: ['', Validators.required],
    });
  }

  // name = new FormControl('', [Validators.required]);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // phone = new FormControl('', [Validators.required, Validators.pattern('^[2-9]{1}[0-9]{9}$')]);

  // getErrorMessageEmail() {
  //   if (this.email.hasError('required')) {
  //     return 'Email is required';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // getErrorMessageName() {
  //   if (this.name.hasError('required')) {
  //     return 'Name is required';
  //   }
  // }

  // getErrorMessagePhone() {
  //   if (this.phone.hasError('required')) {
  //     return 'Phone number is required';
  //   }
  //   return this.phone.hasError('phone number') ? 'Not a valid phone number' : '';
  // }

  onSubmit(){
    this._submissionService.submit(this.userModel)
      .subscribe(
        data => {
          console.log('Success!', data);
          this.showMsgSuccess = true;
          setTimeout(()=> this.showMsgSuccess = false,2500);
        }
          ,
        error => {
          console.log('Error!', error)
          this.showMsgFail = true;
          setTimeout(()=> this.showMsgFail = false,2500);
        })
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}


}

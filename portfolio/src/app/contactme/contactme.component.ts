import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {

  contactForm: any;
  invalidForm!: string;
  spinning = "none";
  showBtn = "block";
  successMsg!: string;
  errorMsg!: string;
  displayResponse = "none";
  

  constructor(public httpService:HttpService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      subject:  new FormControl(""),
      message: new FormControl("", [Validators.required])
    });
    this.contactForm.valueChanges.subscribe((data:any) => { this.formValidation(data) });
    this.formValidation();
  }

  onCancel():void {
    //this.dialogRef.close();
  }

  formErrors: FormGroup | any = {
    'name': '',
    'email': '',
    'message': ''
};

formErrormsgs: any = {
  'name': {
    'required': 'Your name is required.'
  },
  'email': {
    'required': 'Your email is required.',
    'email': 'Enter valid email.'
  },
  'message': {
    'required': 'Your message is required.'
  }
};

formValidation (data?: any) {
  if(!this.contactForm){return;}
  const form = this.contactForm;
  for(const field in this.formErrors) {
    if(this.formErrors.hasOwnProperty(field)) {
      // clears all errors
      this.formErrors[field] = '';
      this.invalidForm = '';
      const control = form.get(field);
      if(control && control.dirty && control.invalid) {
        const errmsg = this.formErrormsgs[field];
        for(const errType in control.errors)
        if(control.errors.hasOwnProperty(errType)) {
          this.formErrors[field] += errmsg[errType] + '';
        }
      }
    }
  }
}

  submit() {
    if(this.contactForm.valid) {
      this.isLoading();
      let formData = new FormData();
      formData.append("name", this.contactForm.get("name").value);
      formData.append("email", this.contactForm.get("email").value);
      formData.append("subject", this.contactForm.get("subject").value);
      formData.append("message", this.contactForm.get("message").value);

      this.httpService.sendMessage(formData).subscribe(data => {
        if(data["result"] == "success") {
          this.isSubmitted();
          this.displayResponse = "block";
          this.successMsg = "Thank you for contacting me";
          this.errorMsg = "";
        }
        else {
          this.errorResponse();
        }
      }, (err => {
        this.errorResponse();
      }));
    }
    this.invalidForm = "Please provide the details on the form";
  }

  isLoading() {
    this.spinning = "block";
    this.showBtn = "none";
  }
  isSubmitted() {
    this.spinning = "none";
    this.showBtn = "block";
  }
  errorResponse() {
    this.isSubmitted();
    this.displayResponse = "block";
    this.errorMsg = "Oops!! Something went wrong";
    this.successMsg = "";
    setTimeout(() => {
      this.displayResponse = "none";
      this.errorMsg = "";
    }, 4000);
  }

}

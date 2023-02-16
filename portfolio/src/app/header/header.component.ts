import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactmeComponent } from '../contactme/contactme.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myModal = "none";
  contactForm: any;
  spinning = "none";
  showBtn = "block";

  constructor(public dialog:MatDialog) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      subject:  new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required])
    });
  }

      openDialog(enterAnimationDuration:string, exitAnimationDuration:string) {
    const dialogRef = this.dialog.open(ContactmeComponent, {
      height: '430px',
      width: '480px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}

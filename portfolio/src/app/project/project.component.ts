import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  my_break_point: number |any;
  constructor() { }

  ngOnInit(): void {
    this.my_break_point = (window.innerWidth <= 900) ? 1 : 2;
  }
  handleSize(event:any) {
    this.my_break_point = (event.target.innerWidth <= 900) ? 1 : 2;
  }



}

import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() userName:string;
  
  

  constructor() {}

 

  ngOnInit(): void {
  
    
  
  }
 
  clicklMe(){
    alert(this.userName)
  }

}

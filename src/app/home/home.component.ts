import { AfterViewInit, Component, ElementRef, OnInit, ViewChild ,Input} from '@angular/core';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,AfterViewInit {
 

  @ViewChild('nameRef')nameElementRef:ElementRef;

  @ViewChild(CourseComponent) child:CourseComponent;
 
  
  childData='Diptikanta Nayak';

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.style.color="red"
    console.log(this.child)
  }

  constructor() {}
  

  ngOnInit(): void {
    // console.log(this.nameElementRef)
  }
  changChildProperty(){
this.child.userName="dipu";

  }
  callChildMethod(){
this.child.clicklMe()
  }

}

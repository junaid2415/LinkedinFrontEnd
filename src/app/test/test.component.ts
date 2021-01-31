import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(value){
    console.log(value);
    value.education = [value.education];
    value.skills = [value?.skills];
    this.dataService.postResouce(value).subscribe((data: any[]) => {
        console.log(data);
        // this.users = data;
      });
  }
}

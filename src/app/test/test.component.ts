import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { UserModel} from '../Models/userModel';
import { Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private dataService: DataService, private  router: Router) { }
  ngOnInit(): void {
  }

  errorMsg: any;
  user= new UserModel();
  // tslint:disable-next-line:typedef
  onSubmit(value){
    console.log(this.user, typeof this.user);
    // value.education= [];
    // value.education.push(value?.education.json);
    // value.education = [value?.education];
    // value.skills = [value?.skillName];
    // let body= {value};

    this.dataService.postResouce(this.user).subscribe(
      response => {
        console.log('Success!', response);
        this.router.navigate([`/home`]);
      },
      error => this.errorMsg = error.statusText
    );

  }
}

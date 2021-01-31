import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  College: string;
  Degree: string;
  Feildofstudy: string;
  Startdate: string;
  enddate: string;
  users = [];


  constructor(private  dataService: DataService) {
  }

  ngOnInit(): void {
    this.College = 'Vasavi College Of Engineerings';
    this.Degree = 'Bachelers';
    this.Feildofstudy = ' CSE';

    //
    // this.dataService.getAll().subscribe((data: any[]) => {
    //   console.log(data);
    //   this.users = data;
    // },
    // error => {
    //   console.log(error);
    // });

  }
}
//
// <!--TO-DO-->
// <!--schoolname-->
// <!--degree-->
// <!--feild of study-->
// <!--start date-->
// <!--end date-->
// <!--Grade-->

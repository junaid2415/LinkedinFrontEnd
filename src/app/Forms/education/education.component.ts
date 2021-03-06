import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import {HttpClient} from '@angular/common/http';
import {EduModel} from '../../Models/eduModel';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../Models/userModel';


import { Router} from '@angular/router';
import {ProfileComponent} from '../../profile/profile.component';
import {EduServiceService} from '../../services/edu-service.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  constructor(private  dataService: DataService,
              private router: Router,
              private activatedroute: ActivatedRoute,
              private eduService: EduServiceService
  ) {}


  id: number;

  edu= new EduModel();
  user: any;
  onSubmit(value){

    this.eduService.postEdu(this.edu, this.id).subscribe(
      (resource) => {
        console.log(resource);
        this.router.navigate([`/profile/${this.id}`]);

      },

      error => {console.log(error); }
    );

  }

  ngOnInit(): void {


    this.activatedroute.paramMap.subscribe(params => {
      const x = params.get('id');
      this.id = +x;
      console.log("HII");
      console.log(this.id);
    });
    // this.College = 'Vasavi College Of Engineerings';
    // this.Degree = 'Bachelers';
    // this.Feildofstudy = ' CSE';

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

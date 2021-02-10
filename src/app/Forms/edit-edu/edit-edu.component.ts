import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EduModel} from '../../Models/eduModel';
import {EduServiceService} from '../../services/edu-service.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {



  edu= new EduModel();

  constructor(private  dataService: DataService,
              private router: Router,
              private activatedroute: ActivatedRoute,
              private eduService: EduServiceService
              ) {}

  id: any;
  uid: any;

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      const x = params.get('id');
      this.id = +x;
      console.log('edu id' + this.id);
    });

    this.activatedroute.queryParamMap.subscribe( params => {
      this.uid = +params.get('uid');
    });
    console.log('Get Edu');
    this.eduService.getEdu(this.id).subscribe( res  => {
      this.edu = res; },
      err => {  console.log(err + "err"); }
      );
    console.log(this.edu);

  }
  // tslint:disable-next-line:typedef
  submitEdu(){
    console.log(this.edu);
    // this.dataService.updateEdu(this.uid, this.id , this.edu);

    this.eduService.updateEdu(this.uid, this.id, this.edu).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profile', this.uid]);
        },
      err => {console.log(err); }
    );
    // ;
  }

}

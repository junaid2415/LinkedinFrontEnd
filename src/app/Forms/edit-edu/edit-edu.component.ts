import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EduModel} from '../../Models/eduModel';


@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {



  edu = new EduModel();

  constructor(private  dataService: DataService, private router: Router, private activatedroute: ActivatedRoute) {

  }

  id: any;
  uid:any;

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      const x = params.get('id');
      this.id = +x;
      console.log('edu id' + this.id);
      this.uid = params.get('uid');

    });

  }
  submitEdu(){
    console.log(this.edu);
    // this.dataService.updateEdu(this.uid, this.id , this.edu);

    this.dataService.updateEdu(this.uid, this.id, this.edu);
    this.router.navigate(["/profile", this.uid]);
  }


}

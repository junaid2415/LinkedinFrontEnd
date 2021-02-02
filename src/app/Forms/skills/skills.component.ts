import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EduModel} from '../../Models/eduModel';
import {SkillsModel} from '../../Models/skillsModel';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private  dataService: DataService,private router: Router, private activatedroute: ActivatedRoute) {
  }
  id: number;

  skills= new SkillsModel();
  user: any;

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(params => {
      const x = params.get('id');
      this.id = +x;
      console.log("HII");
      console.log(this.id);
    });
  }

  onSubmit(value){

    this.dataService.postSkill(this.skills, this.id).subscribe(
      (resource)=> {console.log(resource)},
      error => {console.log(error)}
    );

    this.router.navigate([`/profile/${this.id}`]);
  }

}

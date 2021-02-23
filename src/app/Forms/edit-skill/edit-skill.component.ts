import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SkillsModel} from '../../Models/skillsModel';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EduServiceService} from '../../services/edu-service.service';
import {SkillServiceService} from '../../services/skill-service.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})

export class EditSkillComponent implements OnInit {

  editSkill = new FormGroup(
    {
      name: new FormControl()
    }
  );

  id: any;
  uid: any;
  skill = new SkillsModel();

  constructor(
              private  dataService: DataService,
              private router: Router,
              private activatedroute: ActivatedRoute,
              private skillService: SkillServiceService
            ) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      const x = params.get('id');
      this.id = +x;
      console.log('skill id' + this.id);
    });

    this.activatedroute.queryParamMap.subscribe( params => {
      this.uid = +params.get('uid');
      console.log(this.uid + "User ID")
    });

    this.skillService.getSkillById(this.id).subscribe(
      res => {
        this.skill = res;
          this.name.setValue(res.name);

      },
      err => {console.log(err); }
    );

  }

  onSubmit(){

    this.skill.name = this.name.value;

    this.skillService.updateSkill(this.skill, this.id, this.uid).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profile', this.uid]);
      },
      err => {console.log(err); }
    );
  }

  get name(){
    return this.editSkill.get('name');
  }

}

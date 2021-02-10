import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {
  }

}

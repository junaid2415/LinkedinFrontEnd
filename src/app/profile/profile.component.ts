import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  id: number;

  constructor(private dataService: DataService, private  activatedroute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(params => {
      const x = params.get('id');
      this.id = +x;
    });

    this.dataService.getUserById(this.id).subscribe((data: any[]) => {
        console.log(data);
        this.user = data;
      },
      error => {
        console.log(error);
      });

  }
}

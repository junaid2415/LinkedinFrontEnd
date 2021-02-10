import {Component, DoCheck, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user: any;
  id: number;


  constructor(
    private dataService: DataService,
    private  activatedroute: ActivatedRoute,
    private router: Router) {
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

  deleteEdu(id: any){
    this.dataService.deleteEdu(id).subscribe( (res) => {
      console.log(res);
      this.ngOnInit()
    },
      error => { console.log(error); } );
  }

  // AddEduParam(edu){
  //   this.router.navigate([`/edit/education/${edu.id}`],edu);
  // }


goto(){
    this.router.navigate(['/edit/user',this.id]);
}

  deleteSkill(id: any){
    this.dataService.deleteSkill(id).subscribe(
      (res)=> {
        console.log(res);
        this.ngOnInit()
      },
      error => console.log(error)
    );
  }
}

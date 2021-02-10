import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../Models/userModel';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  editUser = new FormGroup(
    {
      username: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      imgurl: new FormControl()
    }
  );

  constructor(
    private  dataService: DataService,
    private router: Router,
    private activatedroute: ActivatedRoute,
  ) {
  }

  uid: any;
  user = new UserModel();

  submitChanges() {

    this.user.userName = this.username.value;
    this.user.firstName = this.firstname.value;
    this.user.lastName = this.lastname.value;
    this.user.profilePic = this.img.value;

    this.dataService.updateUser(this.uid, this.user ).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profile', this.uid]);
      },
      err => {console.log(err); }
    );
  }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe((params) => {
      this.uid = params.get('id');
      this.dataService.getUserById(this.uid).subscribe((res) => {

          this.user = res;
          // console.log("user says hi "+ JSON.stringify(this.user));

          this.username.setValue(res.userName);
          this.firstname.setValue(res.firstName);
          this.lastname.setValue(res.lastName);
          if (res.profilePic === null) {
            this.img.setValue('ImageUrl');
          }
          else {
            this.img.setValue(res.profilePic);
          }
        },
        error => {
          console.log(error);
        }
      );
    },
      error => {console.log(error); } );

  }



  get username(){ return this.editUser.get('username'); }
  get firstname(){ return this.editUser.get('firstname'); }
  get lastname(){return this.editUser.get('lastname'); }
  get img(){return this.editUser.get('imgurl'); }
}




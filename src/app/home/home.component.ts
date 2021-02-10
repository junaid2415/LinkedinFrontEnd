import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  users = [];
  errorMsg;

  // refreshUsers$ = new BehaviorSubject(true);
  ngOnInit(): void {

    this.dataService.getAll().subscribe
      ((data: any[]) => {
                console.log(data);
                this.users = data;
              },
      error => {
                console.log(error);
              });
  }

  delUser(id: any) {

    for (var i = 0; i < this.users.length; i++) {
      var obj = this.users[i];
      if ((obj.id) === id) {
        this.users.splice(i, 1);
      }
    }

    this.dataService.deleteUser(id).subscribe
    (
      response => {
            console.log('Success!', response);
            this.ngOnInit();
          },
      error => this.errorMsg = error.statusText
    );
  }

}

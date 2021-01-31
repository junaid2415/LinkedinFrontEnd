import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
  users = [];
  ngOnInit(): void {

    this.dataService.getAll().subscribe((data: any[]) => {
        console.log(data);
        this.users = data;
      },
      error => {
        console.log(error);
      });
  }

}

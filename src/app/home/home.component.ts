import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  taskList:string[]=[];
  constructor(private tasks:DataService) { }

  ngOnInit(): void {
    this.tasks.share.subscribe(x => this.taskList=x)
  }
  delete(index:number){
    this.tasks.deleteTask(index);
  }
}
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newTask:string="";
  constructor(private tasks:DataService) { }
  ngOnInit(): void {}
  updateText(text:string){
    this.newTask=text;
  }
  addTask(){
    this.tasks.addTask(this.newTask);
  }
}
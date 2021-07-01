import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasksLog:string[]=[];
  private content=new BehaviorSubject<string[]>(this.tasksLog);
  public share = this.content.asObservable();
  constructor() { }
  addTask(newtask:string){
    this.tasksLog.push(newtask);
    this.content.next(this.tasksLog);
  }
  deleteTask(index:number){
    this.tasksLog.splice(index,1);
    this.content.next(this.tasksLog);
  }
}
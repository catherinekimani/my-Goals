import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1,"watching Finding Nemo","it a movie", new Date(2020,3,14) ),
    new Goal(2,"Learn angular","use videos and doucuments", new Date(2019,6,9) ),
    new Goal(3,"finish content","using lms", new Date(2022,5,8) ),
    new Goal(4,"meditate","mental health app", new Date(2018,8,12) ),
    new Goal(5,"listening to music","Afromusic", new Date(2022,4,4) )
  ];

  addNewGoal(goal:any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index:number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete:boolean, index:number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

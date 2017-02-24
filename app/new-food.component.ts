import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h1>More food ...</h1>
    <div>
      <label>Enter Food Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Food Detail:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Calorie:</label>
      <input #newCalorie>
     <button (click)="addClicked(newName.value, newDetails.value, newCalorie.value)">Add</button>
    </div>
  `
})

export class NewFoodComponent {
   @Output() newFoodSender = new EventEmitter();
    addClicked(name: string, details: string, calorie: number) {
      var newFoodToAdd: Food = new Food(name, details, calorie);
      this.newFoodSender.emit(newFoodToAdd);
    }
  }

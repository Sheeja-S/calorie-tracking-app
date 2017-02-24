import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood">
   <h1>Edit food intake</h1>
   <div>
     <label>Enter food name:</label>
     <input [(ngModel)]="childSelectedFood.name">
   </div>
  <div>
    <label>Enter food details:</label>
    <input [(ngModel)]="childSelectedFood.details">
  </div>
  <div>
    <label>Enter calorie:</label>
    <input [(ngModel)]="childSelectedFood.calorie">
    <button (click)="finishedEditing()">Done</button>
  </div>
</div>
`
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

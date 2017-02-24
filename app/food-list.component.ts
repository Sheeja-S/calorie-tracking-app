import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
     <option value="all">Show complete food list</option>
     <option value="highcaloriefood">Show high calorie food</option>
     <option value="lowcaloriefood" selected="selected">show low calorie food</option>
   </select>
    <div *ngFor="let currentFood of childFoodList | completeness:selectedCompleteness">
      <h3>{{ currentFood.name }}</h3>
      <button (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
    </div>
`
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "lowcaloriefood";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(foodToEdit: Food) {
   this.clickSender.emit(foodToEdit);
 }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food intake for today:</h1>
    <food-list
    [childFoodList]="masterFoodList"
   (clickSender)="showDetails($event)">
    </food-list>
    <edit-food
    [childSelectedFood]="selectedFood"
    (doneClickedSender)="finishedEditing()">
    </edit-food>
    <new-food
    (newFoodSender)="addFood($event)">
    </new-food>
    </div>
    `
 })


 export class AppComponent {
    public masterFoodList: Food[] = [
       new Food("Rice noodles", "no soy sauce", 70),
       new Food("Chicken burger","with bagel and grilled chicken",150),
       new Food("Dimsum","pork", 200),
       new Food("Sticky Rice","boiled vegetables and prawns as sides", 200)
   ];

 selectedFood: Food = null;
   showDetails(clickedFood: Food) {
     this.selectedFood= clickedFood;
   }
   finishedEditing() {
     this.selectedFood = null;
   }
   addFood(newFoodFromChild: Food) {
      this.masterFoodList.push(newFoodFromChild);
    }
  }

import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Food[], desiredCompleteness, word1, word2){
    var output: Food[] = [];
    console.log(desiredCompleteness);
    console.log(word1);
    console.log(word2);

     if (desiredCompleteness === "highcaloriefood") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie > 100) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (desiredCompleteness === "lowcaloriefood") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie < 100) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';


@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform{
  transform(input: Keg[], desiredCompleteness){
    let output: Keg[] = [];
    if(desiredCompleteness === "partialKegs"){
      for (let i = 0; i < input.length; i++){
        if (input[i].tapped === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "tappedKegs"){
      for(let i =0; i < input.length; i++){
        if (input[i].tapped === true){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}

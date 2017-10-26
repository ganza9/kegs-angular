import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="tappedKegs">Tapped Kegs</option>
      <option value="partialKegs" selected="selected">Partial Kegs</option>
    </select>

    <table class="bordered">
      <thead>
        <tr>
          <th>Beer</th>
          <th>Brewery</th>
          <th>Price Per Pint</th>
          <th>Alcohol Content</th>
          <th>Pints Left</th>
          <th>Purchase</th>
          <th>Edit Keg</th>
          <th>Tapped?</th>
        </tr>
      </thead>

      <tbody>
        <tr (click)="isTapped(currentKeg)" *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness">
          <td>{{currentKeg.name}}</td>
          <td>{{currentKeg.brand}}</td>
          <td>$ {{currentKeg.price}}</td>
          <td [class]="alcoholContentColor(currentKeg)">{{currentKeg.alcoholContent}} %</td>
          <td>{{currentKeg.pintsLeft}}</td>
          <td><button class="waves-effect waves-light btn deep-purple" type="submit" name="action"><i class="material-icons">credit_card</i></button></td>
          <td><button (click)="editButtonHasBeenClicked(currentKeg)" class="waves-effect waves-light btn grey" type="submit" name="action"><i class="material-icons">edit</i></button></td>
          <td><input *ngIf="currentKeg.tapped === true" type="checkbox" checked (click)="toggleTapped(currentKeg, false)"/>
          <input *ngIf="currentKeg.tapped === false" type="checkbox" class="filled-in" id="filled-in-box" (click)="toggleTapped(currentKeg, true)"/></td>
        </tr>
      </tbody>
    </table>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "partialKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  alcoholContentColor(currentKeg){
    if (currentKeg.alcoholContent <= 4){
      return "green lighten-1";
    } else if (currentKeg.alcoholContent <= 8){
      return "amber";
    } else {
      return "deep-orange accent-3";
    }
  }

  isTapped(clickedKeg: Keg){
    if(clickedKeg.tapped === true){
      alert("This keg is tapped!");
    } else {
      alert("This keg is not tapped. Get to drinking bro.");
    }
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleTapped(clickedKeg: Keg, setCompleteness: boolean) {
    clickedKeg.tapped = setCompleteness;
  }

}

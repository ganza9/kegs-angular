import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector:'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Beer Name:</label>
      <input #newName>
      <br>
      <label>Enter Brewery:</label>
      <input #newBrand>
      <br>
      <label>Enter Pint Price:</label>
      <input #newPrice>
      <br>
      <label>Enter Keg Alcohol Content:</label>
      <input #newAlcoholContent>
      <br>
      <label>Enter Keg Pints:</label>
      <input #newpintsLeft>
    </div>
    <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newpintsLeft.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newpintsLeft.value='';" class="waves-effect waves-light grey btn">Add Keg</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number, pintsLeft: number){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, pintsLeft);
    this.newKegSender.emit(newKegToAdd);
  }
}

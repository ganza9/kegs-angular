import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}</h3>
      <h4>Edit Keg</h4>
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Enter Keg Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Enter Keg Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
      <label>Enter Keg Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <label>Enter Keg Pints:</label>
      <input [(ngModel)]="childSelectedKeg.pintsLeft">
      <button (click)="doneButtonClicked()" class="waves-effect waves-light grey btn">Done</button>
    </div>
  </div>
  `
})


export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}

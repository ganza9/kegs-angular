import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Raging Keggers Bro</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {

  masterKegList: Keg[] = [
    new Keg("Carina Peach Sour", "Ecliptic", 5, 2, 124),
    new Keg("Torpedo", "Sierra Nevada", 4, 6.7, 124),
    new Keg("Grapefruit Sculpin", "Ballast Point", 7, 15, 124)];
    selectedKeg= null;

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  isTapped(clickedKeg: Keg){
    if(clickedKeg.tapped === true){
      alert("This keg is tapped!");
    } else {
      alert("This keg is not tapped. Get to drinking bro.");
    }
  }

}

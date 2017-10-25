import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Raging Keggers Bro</h1>
      <table class="bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Alcohol Content</th>
            <th>Pints Left</th>
            <th>Purchase</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let currentKeg of kegs">
            <td>{{currentKeg.name}}</td>
            <td>{{currentKeg.brand}}</td>
            <td>{{currentKeg.price}}</td>
            <td [class]="alcoholContentColor(currentKeg)">{{currentKeg.alcoholContent}}</td>
            <td>{{currentKeg.pintsLeft}}</td>
            <td><button (click)="editKeg()" class="waves-effect waves-light btn deep-purple" type="submit" name="action"><i class="material-icons right">credit_card</i>Buy a Pint!</button></td>

          </tr>
        </tbody>
      </table>
    </div>

  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("Carina Peach Sour", "Ecliptic", 5, 2, 124),
    new Keg("Torpedo", "Sierra Nevada", 4, 6.7, 124),
    new Keg("Grapefruit Sculpin", "Ballast Point", 7, 15, 124)
  ];

  editKeg(){
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
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public pintsLeft: number) { }
}

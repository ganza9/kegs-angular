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
            <td>{{currentKeg.alcoholContent}}</td>
            <td>{{currentKeg.pintsLeft}}</td>
            <td><button (click)="editTask()" class="waves-effect waves-light btn amber accent-4" type="submit" name="action"><i class="material-icons right">credit_card</i>Buy a Pint!</button></td>

          </tr>
        </tbody>
      </table>
    </div>

  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("Carina Peach Sour", "Ecliptic", 5, 8, 124),
    new Keg("Torpedo", "Sierra Nevada", 4, 6.7, 124),
    new Keg("Grapefruit Sculpin", "Ballast Point", 7, 5, 124)
  ];
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public pintsLeft: number) { }
}

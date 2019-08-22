import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komali',
  template: `
    <p ngNonBindable>
      {{ komali works! }}
    </p>
    <hr>
    <input [(ngModel)]="agree" type="checkbox">
    <p *ngIf="agree">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quas quos corporis odit, aspernatur tenetur et officia ea, a, nam fuga sequi fugit. Nisi consequuntur aliquam amet doloremque magnam modi!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quas quos corporis odit, aspernatur tenetur et officia ea, a, nam fuga sequi fugit. Nisi consequuntur aliquam amet doloremque magnam modi!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quas quos corporis odit, aspernatur tenetur et officia ea, a, nam fuga sequi fugit. Nisi consequuntur aliquam amet doloremque magnam modi!
    </p>
    <hr>
    <input [(ngModel)]="power" type="range" min="0" max="10" step="1">
    <h2>Power now is : {{ power }}</h2>
    <h2> Ironman is now 
    <span [ngSwitch]="power">
    <span *ngSwitchCase="5" >Weak</span>
    <span *ngSwitchCase="6" >Recovering</span>
    <span *ngSwitchCase="7" >Moderate</span>
    <span *ngSwitchCase="8" >Strong</span>
    <span *ngSwitchCase="9" >Strongest</span>
    <span *ngSwitchCase="10" >Unbeatable</span>
    <span *ngSwitchDefault >Out of Game</span>
     </span>
     <hr>
     <ul>
      <li>{{herolist[0].title}}</li>
      <li>{{herolist[1].title}}</li>
      <li>{{herolist[2].title}}</li>
      <li>{{herolist[3].title}}</li>
      <li>{{herolist[4].title}}</li>
      <li>{{herolist[5].title}}</li>
     </ul>
     <ul><li *ngFor="let hero of herolist">{{hero.title}} </li></ul>
     <hr>
     <input [(ngModel)]="enableColor" type="checkbox">
     <ul><li *ngFor="let fruit of fruitsList">{{fruit.name}} :: <h1  *ngIf="enableColor"><span [style.background-color]="fruit.color">{{fruit.color}}</span></h1> </li> </ul>
  `,
  styles: [`
  .box{
    border :2px solid gray;
   }
 `]
})
export class KomaliComponent {
agree =true;
power=6;
enableColor = true;
colorName ="orange";
fruitsList =[{
    "name" : "Banana",
    "color" : "Yellow",
    },{
      "name" : "Stawberry",
      "color" : "Red",
      },
      {
        "name" : "Gova",
        "color" : "Green",
        }]
herolist = [{
  "sl": 1,
  "title": "Batman",
  "gender": "male",
  "firstname": "Bruce",
  "lastname": "Wayne",
  "city": "Gotham",
  "ticketprice": 123.45,
  "releasedate": "1/26/2018",
  "poster": "assets/images/batman.jpg"
},
{
  "sl": 2,
  "title": "Superman",
  "gender": "male",
  "firstname": "Clark",
  "lastname": "Kent",
  "city": "Metropolis",
  "ticketprice": 178.67,
  "releasedate": "1/27/2018",
  "poster": "assets/images/superman.jpg"
},
{
  "sl": 3,
  "title": "Ironman",
  "gender": "male",
  "firstname": "Tony",
  "lastname": "Stark",
  "city": "New York",
  "ticketprice": 122.90,
  "releasedate": "1/27/2018",
  "poster": "assets/images/ironman.jpg"    
}, {
  "sl": 4,
  "title": "Phantom",
  "gender": "male",
  "firstname": "Kit",
  "lastname": "Walker",
  "city": "Bhangala",
  "ticketprice": 98.64,
  "releasedate": "1/27/2018",
  "poster": "assets/images/phantom.jpg"
}, {
  "sl": 5,
  "title": "Spiderman",
  "gender": "male",
  "firstname": "Peter",
  "lastname": "Parker",
  "city": "New York",
  "ticketprice": 451.34,
  "releasedate": "9/26/2018",
  "poster": "assets/images/spiderman.jpg"
},
{
  "sl": 6,
  "title": "Wonder Women",
  "gender": "female",
  "firstname": "Princess",
  "lastname": "Diana",
  "city": "Amazon",
  "ticketprice": 341.34,
  "releasedate": "11/26/2018",
  "poster": "assets/images/wonderwoman.png"
}];

}

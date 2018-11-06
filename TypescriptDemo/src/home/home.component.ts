import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   discount : number;
   totalAmt : number;


  constructor() { }

  ngOnInit() {
 console.log("Mobile Price - " + this.calculatePrice(28000));
    
  }

 calculatePrice(price:number):number{
 

  enum mobPrice{Black=25000,White=28000,Gold=30000};
if(mobPrice.Black==price)
{
  this.discount=5;
}else if(mobPrice.Gold){
  this.discount =7;
}else{
  this.discount = 10;
}

this.totalAmt = price-price * this.discount/100;
return this.totalAmt;
 }

}

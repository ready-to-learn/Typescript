import { Component, OnInit } from '@angular/core';

enum mobPrice{Black=25000,White=28000,Gold=30000};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  discount : number;
  totalAmt : number;
  mobiles : any;
  constructor() { 
  }

  ngOnInit() {
 console.log("Mobile Price - " + this.calculatePrice(28000));
 this.mobiles= [
  {
    name: "Sony Xperia Z2",
    image_path: "assets/Sony_Xperia_Z2.png",
    price: mobPrice.Black,
  },
  {
    name: "Sony Xperia R1",
    image_path: "assets/Sony_Xperia_R1.png" ,
    price: mobPrice.White,
  },
  {
    name: "Sony Xperia R1 Plus",
    image_path: "assets/Sony_Xperia_R1_Plus.png",
    price: mobPrice.Gold
  }

];
    console.log(this.mobiles[0].image_path);
  }

 calculatePrice(price:number):number{
 
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

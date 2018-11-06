import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-demo',
  templateUrl: './basics-demo.component.html',
  styleUrls: ['./basics-demo.component.css']
})
export class BasicsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

//      //Declaring variables with basic types using let

// let productId:number=1045; //Declaring a numeric variable

// let productDescription:string="16GB, Gold"; //Declaring a string variable

// let productName:string="Samsung Galaxy J7"; 

// let productAvailable: boolean = true;   //Declaring a boolean variable

// console.log("The type of productId is " + typeof productId);

// console.log("The type of productAvailable is "+typeof productAvailable);

// console.log("The type of productName is "+typeof productName);

// //Declaring variables using const

// const discountPercentage:number=15;

// console.log("Discount percentage is:"+discountPercentage);

var var1=100;
if(true){
	var var1=200;
	console.log(var1)
}
console.log(var1);
let var2=200;
if(true){
	let var2=100;
	console.log(var2);
}
console.log(var2);
  }

}

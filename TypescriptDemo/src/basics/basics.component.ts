import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  letScope:boolean = false;
  isDemo:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  staticTyping(){
   // this.display(1,'abc'); // throws error during compilation - static typing 
   this.display("jai" ,101)
    
  }

  variablesScope(){
    this.letScope = true;
    alert ( " From function --> " +this.displayScope());
  }

  displayScope() : string{
     let x = " Scope is only within the function "
    // this.letScope=false;
    return x;
   
  }



  display(name:string, id : number){
        alert("Name : " + name + " Id : " + id);
  }


  blockScope(){
    for(let i=0;i < 10 ;i++){
      setTimeout(function(){
        console.log("Timer : " + i);
      })
    }
  }

  basicsDemo(){
    this.isDemo = true;
  }
}

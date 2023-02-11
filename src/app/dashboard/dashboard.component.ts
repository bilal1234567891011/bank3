import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno:any
  psw:any
  amnt:any

  acno1:any
  psw1:any
  amnt1:any



  user=""
  constructor(private ds:DataService){
   this.user=this.ds.user

  }
  deposit(){
var acno=this.acno
var psw=this.psw
var amnt=this.amnt
var result=this.ds.deposit(acno,psw,amnt)
if(result){
  alert(`your ac has been credited with ammount ${amnt} and the cureent balance is ${result}`)
}
else{
  alert ("incorrect acno or password")
}

  }


  withdraw(){
    var acno1=this.acno1
var psw1=this.psw1
var amnt1=this.amnt1
const result=  this.ds.withdraw(acno1,psw1,amnt1)
if(result){
  alert(`your ac has been debited with ammount ${amnt1} and the current balance is ${result}`)
}


  }

}

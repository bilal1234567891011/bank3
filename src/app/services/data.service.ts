import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user=''
  currentAcno=""

  constructor() { }

  userDetailes:any={1000:{acno:1000,username:"anu",password:"abc123",balance:0,transaction:[]},
  1001:{acno:1000,username:"amal",password:"abc123",balance:0,transaction:[]},
  1003:{acno:1000,username:"arun",password:"abc123",balance:0,transaction:[]},
  1004:{acno:1000,username:"akil",password:"abc123",balance:0,transaction:[]}

}
register(uname:any,acno:any,psw:any){
  if(acno in this.userDetailes){
    return false
  }
  else{
    this.userDetailes[acno]={acno,username:uname,password:psw,balance:0}
    console.log(this.userDetailes);
    
    return true
  }
}
login(acno:any,psw:any){
  var userDetailes=this.userDetailes
  if(acno in userDetailes){
    if(psw==userDetailes[acno]["password"]){
  this.user= userDetailes[acno]["username"]
  // console.log((this.user));
  
this.currentAcno=acno
      return true
    }
    else{
return false
    }
  
  }
  else{
    return false
  }
  
 }
deposit(acnum:any,password:any,amount:any){
  let userDetailes=this.userDetailes
  // convert string amount to number

var amnt= parseInt(amount)

  if(acnum in userDetailes){

    if(password==userDetailes[acnum]["password"]){

      // update balance

userDetailes[acnum]["balance"]+=amnt
// console.log(userDetailes);


//transaction data store 
userDetailes[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})


// return current balance

return userDetailes[acnum]["balance"]

    }
    else{
      return false
    }
  }
  
  else{
    return false
  }

}

withdraw(acno2:any,psw2:any,amount:any){
 let userDetailes=  this.userDetailes
 var amnt= parseInt(amount)

 if(acno2 in userDetailes){
if(psw2==userDetailes[acno2]["password"]){
if(amnt<=userDetailes[acno2]["balance"]){
  userDetailes[acno2]["balance"]=userDetailes[acno2]["balance"]-amnt

  userDetailes[acno2]["transaction"].push({Type:"DEBIT",amount:amnt})
  console.log(userDetailes);
  

  return  userDetailes[acno2]["balance"]
}
else{
  alert("insufficent balance")
  return false
}
}
else{
  alert("incorrect password")
  return false
}
 }
 else{
  alert("incorrect acnum")
  return false
 }
}

getTransaction(acno3:any){
  return this.userDetailes[acno3]["transaction"]
}
}



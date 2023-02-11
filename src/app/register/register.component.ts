import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds: DataService,private route:Router,private fb:FormBuilder ){}
registerForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
psw:['',[Validators.required,Validators.pattern('[A-Za-z0-9]+')]]

})
  register(){
    // alert("register works")
  var uname= this.registerForm.value.uname
  var acno= this.registerForm.value.acno
   var psw=this.registerForm.value.psw
  //  console.log(uname,acno,psw);
  if(this.registerForm.valid){
const result=this.ds.register(uname,acno,psw )
if(result){
alert("registerd")
this.route.navigateByUrl("")
}
else{
  alert("acno already exist")
}
    }
    else{
      alert("invalid form")
    }
  }
}

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from "express-openapi";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-login004',
  templateUrl: './login004.component.html',
  styleUrls: ['./login004.component.css']
})
export class Login004Component implements OnInit {


  constructor(private router: Router,db: AngularFireDatabase) {
        this.db=db;
   }

  username: string;
  password: string;
  text=""
  title="\"Pick the Real Image\""
  batch=""
  text_mid=""
  text_end="We thank you for your help! Hope you have a great day :)"
  button_title=""
  userData;
  db;
  ref;

  ngOnInit() {

    this.userData = this.db.database.ref('UserData004');
    this.batch=localStorage.getItem("batch004")
    this.button_title="Next Page"
    this.text="You will be shown two images after clicking 'next page' (arrow below). One is real and the other is computer-generated. You need to select the real one. You will be given only 1 second to see it. It is better to go with the first one that you feel is most real - do not overthink.\
    \n \nYou will be taken to the next page after clicking. If you feel you clicked the wrong one, or couldn't see properly within the given time, that is completely okay. Do not overthink or worry about that. Just proceed with the next ones.\
    \n \n There are 2 batches of 50 images and a 3rd one with slightly less. You get a break in between batches.\
    \n \nThank you very much in advance for taking your time to assist this research work on realistic image generation. Your support will be highly valuable in determining the quality of our work."
    this.text_mid="You have finished "+this.batch+" batch / batches of 50 images! There is / are "+(3-Number(this.batch))+" more to go. We thank you again for assisting us with this task. You may take a break and return to this screen, or keep going immediately. Press the \"continue\" button to proceed."
    if (this.batch==undefined||null){
      console.log("test")
      this.ref=this.userData.push()
      localStorage.setItem("ref",JSON.stringify(this.ref))
    }
    if(this.batch!=undefined && this.batch!="03"){
      this.button_title="Continue"
      this.text=this.text_mid
    }else if(this.batch=="03"){
      this.text=this.text_end
      this.db.database.ref(localStorage.getItem("ref").replace("https://evident-healer-278012.firebaseio.com/","")).set(JSON.parse(localStorage.getItem("results")))
    }
  }

  login(): void {
    if (true) {
      this.db.database.ref(localStorage.getItem("ref").replace("https://evident-healer-278012.firebaseio.com/","")).set(JSON.parse(localStorage.getItem("results")))
      localStorage.setItem("admin","true")
      this.router.navigate(["image004"],{state:{"batch":Number(localStorage.getItem("batch004"))?Number(localStorage.getItem("batch004"))+1<10?"0"+String(Number(localStorage.getItem("batch004"))+1):String(Number(localStorage.getItem("batch004"))+1):"01"}});
    } else {
      alert("Invalid credentials");
    }
  }
}

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from "express-openapi";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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
    
    this.userData = this.db.database.ref('UserData');
    this.batch=localStorage.getItem("batch")
    this.button_title="Next Page"
    this.text="You will be shown three images after clicking 'next page' (arrow below). All three of them are computer-generated images. You need to select the one that looks most realistic (in 5 seconds) by clicking on that one. It is better to go with the first one that you feel is most real - do not overthink.\
    \n \nThe first image you click will be selected, and you will be taken to the next page (even if time is left). If you feel you clicked the wrong one, or couldn't click one within the given time, that is completely okay. Do not overthink or worry about that. Just proceed with the next ones.\n \nThe images will stop showing in 5 seconds. There is a count-down timer on the top of each page above the images which shows time left. Even if you have not selected an image, you will proceed to the next page once time ends (5s). The timer of the next page will begin automatically. There are 10 batches, with 50 images in each batch. You get a break in between batches.\
    \n \nThank you very much in advance for taking your time to assist this research work on realistic image generation. Your support will be highly valuable in determining the quality of our work."
    this.text_mid="You have finished "+this.batch+" batches of 50 images! There are "+(10-Number(this.batch))+" more to go. We thank you again for assisting us with this task. You may take a break and return to this screen, or keep going immediately. Press the \"continue\" button to proceed."
    if (this.batch==undefined||null){
      console.log("test")
      this.ref=this.userData.push()
      localStorage.setItem("ref",JSON.stringify(this.ref))
    }
    if(this.batch!=undefined && this.batch!="10"){
      this.button_title="Continue"
      this.text=this.text_mid
    }else if(this.batch=="10"){
      this.text=this.text_end
      
    }
  }

  login(): void {
    if (true) {
      this.db.database.ref(localStorage.getItem("ref").replace("https://evident-healer-278012.firebaseio.com/","")).set(JSON.parse(localStorage.getItem("results")))
      localStorage.setItem("admin","true")
      this.router.navigate(["image"],{state:{"batch":Number(localStorage.getItem("batch"))?Number(localStorage.getItem("batch"))+1<10?"0"+String(Number(localStorage.getItem("batch"))+1):String(Number(localStorage.getItem("batch"))+1):"01"}});
    } else {
      alert("Invalid credentials");
    }
  }
}

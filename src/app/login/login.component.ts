import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.userData = this.db.list('/UserData');
    this.batch=localStorage.getItem("batch")
    this.button_title="Next Page"
    this.text="You will be shown three images after clicking 'next page' (arrow at bottom right). All three of them are computer-generated images. You need to select the one that looks most realistic (in 5 seconds) by clicking on that one. It is better to go with the first one that you feel is most real - do not overthink.\
   If you feel you clicked the wrong one, or couldn't click one within the given time, that is completely okay. Do not overthink or worry about that. Just proceed with the next ones.The images will stop showing in 5 seconds. There is a timer just like the one on this page. This timer will automatically take you to a new page containing another similar set of 3 such images to do the same after 5 seconds. There are 50 images in this batch altogether.\ Thank you very much in advance for taking your time to assist this research work on realistic image generation. Your support will be highly valuable in determining the quality of our work."
    this.text_mid="You have finished "+this.batch+" batches of 50 images! There are "+(10-Number(this.batch))+" more to go. We thank you again for assisting us with this task. You may take a break and return to this screen, or keep going immediately. Please the \"continue\" button to proceed."
    if(this.batch!=undefined && this.batch!="10"){
      this.button_title="Continue"
      this.text=this.text_mid
    }else if(this.batch=="10"){
      this.text=this.text_end
      this.userData.push(JSON.parse(localStorage.getItem("results")))
    }
  }

  login(): void {
    if (true) {
      localStorage.setItem("admin","true")
      this.router.navigate(["image"],{state:{"batch":Number(localStorage.getItem("batch"))?Number(localStorage.getItem("batch"))+1<10?"0"+String(Number(localStorage.getItem("batch"))+1):String(Number(localStorage.getItem("batch"))+1):"01"}});
    } else {
      alert("Invalid credentials");
    }
  }
}

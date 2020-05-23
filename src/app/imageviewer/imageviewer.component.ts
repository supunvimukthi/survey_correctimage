import { OnInit } from '@angular/core';
import { Component, Directive, ElementRef, EventEmitter, HostListener, Inject, Input, NgModule, Optional, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resolve } from 'url';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { interval, throwError, Subscription } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators'

const DEFAULT_CONFIG = {
  btnClass: 'default',
  zoomFactor: 0.1,
  containerBackgroundColor: '#ccc',
  wheelZoom: false,
  allowFullscreen: false,
  allowKeyboardNavigation: true,
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: true,
    prev: true
  },
  btnIcons: {
    zoomIn: 'fa fa-plus',
    zoomOut: 'fa fa-minus',
    rotateClockwise: 'fa fa-repeat',
    rotateCounterClockwise: 'fa fa-undo',
    next: 'fa fa-arrow-right',
    prev: 'fa fa-arrow-left',
    fullscreen: 'fa fa-arrows-alt',
  }
};

@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.component.html',
  styleUrls: ['./imageviewer.component.css']
})

export class ImageviewerComponent implements OnInit {

  index = 0;
  indexChange = new EventEmitter();
  configChange = new EventEmitter();
  customEvent = new EventEmitter();
  style = { transform: '', msTransform: '', oTransform: '', webkitTransform: '' };
  fullscreen = false;
  loading = true;
  scale = 1;
  rotation = 0;
  translateX = 0;
  translateY = 0;
  hovered = false;
  loading1 = true;
  loading2 = true;
  count = 0;
  src = []
  src1 = []
  src2 = []
  src3 = []
  cl='nohover'
  cl1='nohover'
  cl2='nohover'
  time = 5
  counter$
  batch;
  config = DEFAULT_CONFIG;
  subscription;
  results:JSON=Object();
  constructor(private router: Router, private http: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state==undefined){
      this.batch=localStorage.getItem("batch")
    }else{
      this.batch=this.router.getCurrentNavigation().extras.state.batch;
      localStorage.setItem("batch",this.batch);
    }
    if(localStorage.getItem("results")!=undefined){
      this.results=JSON.parse(localStorage.getItem("results"))
    }
    this.results[this.batch]=[];
    this.index=0
    this.src=[]
    this.src1=[]
    this.src2=[]
    console.log("start")
     


  }

  ngOnInit() {
    if (localStorage.getItem("admin") != null) {
    }
    else {
      alert("You have to login first")
      this.router.navigate(["login"]);
    }
    this.listObjects();
    this.counter$ = interval(1000).pipe(map((x) => {
      return x;
    }));
    this.subscription = this.counter$.subscribe((x) => {
      if (this.time == 0) {
        this.nextImage(-1)
        this.time = 5
      }
      else if (this.time == 5) {
          if(this.loading == false && this.loading1 == false && this.loading2 == false){
            this.time-=1
          }
      }else{
        this.time -= 1
      }
      
    });

    //  this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));


  }
  
  onClick(selected){
    this.time=5
    this.nextImage(selected)  
  }

  async listObjects() {
    let count=0;
    this.http.get("https://storage.googleapis.com/storage/v1/b/research-kr-2020/o?prefix=im_batches/batch_"+this.batch)
      .subscribe((data: any) => {
        data.items.map((record) => {
          if (record.name.includes("01", record.name.length - 6)) {
            this.src.push("https://storage.googleapis.com/research-kr-2020/" + record.name)
          } else if (record.name.includes("02", record.name.length - 6)) {
            this.src2.push("https://storage.googleapis.com/research-kr-2020/" + record.name)
          } else if (record.name.includes("03", record.name.length - 6)) {
            this.src3.push("https://storage.googleapis.com/research-kr-2020/" + record.name)
          }

        })
        // console.log(this.src);
        this.src.forEach(element => {
          var img=new Image();
         img.src=element;
        });
        this.src2.forEach(element => {
          var img=new Image();
         img.src=element;
        });
        this.src3.forEach(element => {
          var img=new Image();
         img.src=element;
        });
         

      }
      );
  }

  ngOnDestroy() {
    localStorage.removeItem("admin")
  }

  /**
     * @param {?} event
     * @return {?}
     */
  nextImage(selected) {
    // console.log(event)
    if (this.index < this.src.length - 1) {
      // console.log("in")
      this.loading = true;
      this.loading1 = true;
      this.loading2 = true;
      this.index++;
      this.count = 0
      this.triggerIndexBinding();
      this.reset();
      this.results[this.batch].push(selected)
      console.log(this.results);

    }else{
      console.log(this.index+" "+this.src.length)
      this.index=0
      localStorage.setItem("results",JSON.stringify(this.results))
      this.router.navigate(["login"])
    }
  }
  /**
   * @param {?} event
   * @return {?}
   */
  prevImage() {
    if (this.index > 0) {

      this.loading = true;
      this.loading1 = true;
      this.loading2 = true;
      this.index--;
      this.count = 0
      this.triggerIndexBinding();
      this.reset();
    }
  }
  /**
   * @return {?}
   */
  zoomIn() {
    this.scale *= (1 + this.config.zoomFactor);
    this.updateStyle();
  }
  /**
   * @return {?}
   */
  zoomOut() {
    if (this.scale > this.config.zoomFactor) {
      this.scale /= (1 + this.config.zoomFactor);
    }
    this.updateStyle();
  }
  /**
   * @param {?} evt
   * @return {?}
   */
  scrollZoom(evt) {
    if (this.config.wheelZoom) {
      evt.deltaY > 0 ? this.zoomOut() : this.zoomIn();
      return false;
    }
  }
  /**
   * @return {?}
   */
  rotateClockwise() {
    this.rotation += 90;
    this.updateStyle();
  }
  /**
   * @return {?}
   */
  rotateCounterClockwise() {
    this.rotation -= 90;
    this.updateStyle();
  }
  /**
   * @return {?}
   */
  onLoad() {
    this.loading = false;
  }
  onLoad1() {
    this.loading1 = false;
  }
  onLoad2() {
    this.loading2 = false;
  }

  onLoads() {
    // console.log("load1")
    this.loading1 = false;
  }

  /**
   * @return {?}
   */
  onLoadStart() {
    this.loading = true;
    console.log("Loading Start")
  }

  /**
   * @return {?}
   */
  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
    if (!this.fullscreen) {
      this.reset();
    }
  }
  /**
   * @return {?}
   */
  triggerIndexBinding() {
    this.indexChange.emit(this.index);
  }
  /**
   * @return {?}
   */
  triggerConfigBinding() {
    this.configChange.next(this.config);
  }
  /**
   * @param {?} name
   * @param {?} imageIndex
   * @return {?}
   */
  fireCustomEvent(name, imageIndex) {
    this.customEvent.emit(new CustomEvent(name, imageIndex));
  }
  /**
   * @return {?}
   */
  reset() {
    this.scale = 1;
    this.rotation = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.updateStyle();
  }
  /**
   * @return {?}
   */
  onMouseOver() {
    this.hovered = true;
  }
  /**
   * @return {?}
   */
  onMouseLeave() {
    this.hovered = false;
  }
  /**
   * @param {?} event
   * @return {?}
   */
  canNavigate(event) {
    return event == null || (this.config.allowKeyboardNavigation && this.hovered);
  }
  /**
   * @return {?}
   */
  updateStyle() {
    this.style.transform = `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotation}deg) scale(${this.scale})`;
    this.style.msTransform = this.style.transform;
    this.style.webkitTransform = this.style.transform;
    this.style.oTransform = this.style.transform;
  }
  /**
   * @param {?} defaultValues
   * @param {?} overrideValues
   * @return {?}
   */
  mergeConfig(defaultValues, overrideValues) {
    let /** @type {?} */ result = Object.assign({}, defaultValues);
    if (overrideValues) {
      result = Object.assign({}, defaultValues, overrideValues);
      if (overrideValues.btnIcons) {
        result.btnIcons = Object.assign({}, defaultValues.btnIcons, overrideValues.btnIcons);
      }
    }
    return result;
  }

}

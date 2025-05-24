import { Component, OnInit } from '@angular/core';
const jsmpeg = require('jsmpeg');
declare var require: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-routing';
  footerUrl = 'https://www.ganatan.com';
  footerLink = 'www.ganatan.com';
  video:any;
  ngOnInit() {

    // const videoUrl = 'https://cycjimmy.github.io/staticFiles/media/big_buck_bunny_640x360.ts';

    // this.video = new JSMpeg.VideoElement('#videoWrapper', videoUrl, {
    //   poster: 'https://cycjimmy.github.io/staticFiles/images/screenshot/big_buck_bunny_640x360.jpg'
    // });

    // console.log(this.video);

    var canvas = document.getElementById('jsmpegCanvas');
var player = new jsmpeg('https://cycjimmy.github.io/staticFiles/media/big_buck_bunny_640x360.ts', {canvas: canvas, autoplay: true, loop: true});
 
  }

  onClick1(sAction:string){
    
    this.video[sAction]();

  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images : {src: String, alt: String}[] = []

  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/252820/1600x700-1.jfif",
        alt: "Sample"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
        alt: "Sample"
      }
    ]
  }

}

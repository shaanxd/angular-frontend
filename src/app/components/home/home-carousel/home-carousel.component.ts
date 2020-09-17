import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  @Input() images: {src: String, alt: String}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

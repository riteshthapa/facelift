import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SubmissionService } from '../submission.service';
import { Images } from "./Images";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 5
      },
      740: {
        items: 8
      },
      940: {
        items: 10
      }
    },
    nav: true
  }

  public images = [];

  constructor(private _submissionService: SubmissionService){}

  ngOnInit() {
    this._submissionService.getJSON().subscribe((data) => {
      this.images = Array.from(Object.keys(data), k=>data[k]);
      // console.log(this.images);
    });
  }

}
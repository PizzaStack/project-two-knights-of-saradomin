import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snowconelike',
  templateUrl: './snowconelike.component.html',
  styleUrls: ['./snowconelike.component.css']
})
export class SnowconelikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  like(): void {
    let img = document.getElementById("likeimg") as HTMLImageElement;
    img.src = "../../assets/snowconelikeshadow.png"
  }

}

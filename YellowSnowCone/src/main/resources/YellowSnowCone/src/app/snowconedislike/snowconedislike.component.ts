import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snowconedislike',
  templateUrl: './snowconedislike.component.html',
  styleUrls: ['./snowconedislike.component.css']
})
export class SnowconedislikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dislike(): void {
    let img = document.getElementById("dislikeImg") as HTMLImageElement;
    img.src = "../../assets/snowconedislikeshadowupsidedown.png"
  }

}

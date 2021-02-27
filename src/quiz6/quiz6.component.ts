import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz6",
  templateUrl: "./quiz6.component.html",
  styleUrls: ["./quiz6.component.css"]
})
export class Quiz6Component implements OnInit {
  constructor() {}
  input = 5;
  res = 5;
  output = [];

  ngOnInit(): void {
    let res = this.input % 2 == 1 ? this.res * 3 + 1 : this.res * 3;
    this.output.push(this.input);
    this.output.push(res);
    while (res > 0 && res != 1) {
      res = res / 2;
      this.output.push(res);
    }
  }
}

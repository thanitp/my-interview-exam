import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz4",
  templateUrl: "./quiz4.component.html",
  styleUrls: ["./quiz4.component.css"]
})
export class Quiz4Component implements OnInit {
  constructor() {}

  res: any = [];
  input: any = [
    [1, 1],
    [6, 4, 8, 31, 7, 5, 9],
    [1, 2],
    [40, 51, 72, 8],
    [33, 30, 31, 22, 4, 45, 46, 67, 66]
  ];
  txtSearch: any;

  ngOnInit(): void {
    for (let i = 0; i < this.input.length; i++) {
      let min: any = this.input[i][0];
      let max: any = this.input[i][0];
      for (let j = 0; j < this.input[i].length; j++) {
        if (min > this.input[i][j]) min = this.input[i][j];
        if (max < this.input[i][j]) max = this.input[i][j];
      }
      this.res.push(min + max);
    }
  }
}

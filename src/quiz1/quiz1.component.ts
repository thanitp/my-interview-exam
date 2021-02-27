import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz1",
  templateUrl: "./quiz1.component.html",
  styleUrls: ["./quiz1.component.css"]
})
export class Quiz1Component implements OnInit {
  constructor() {}

  inputA: any = "9876543";
  inputB: any = ["3467985", "7865439", "8743956", "3456789"];
  outputs: any = [];

  ngOnInit() {
    for (let i = 0; i < this.inputB.length; i++) {
      let flag = "Valid";
      for (let j = 0; j < this.inputB[i].length; j++) {
        if (this.inputB[i][j] == this.inputA[j]) flag = "Invalid";
      }
      this.outputs.push(flag);
    }
  }
}

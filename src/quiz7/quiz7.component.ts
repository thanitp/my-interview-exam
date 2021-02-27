import { Component, OnInit } from "@angular/core";
import { ceil } from "lodash";

@Component({
  selector: "app-quiz7",
  templateUrl: "./quiz7.component.html",
  styleUrls: ["./quiz7.component.css"]
})
export class Quiz7Component implements OnInit {
  constructor() {}

  input: any = [
    "Is text important ?",
    "Pay_attention_to_space",
    "Une chocolatine !"
  ];
  n: any = [3, 5, 1];
  output: any = [];

  ngOnInit(): void {
    let res = [];
    for (let i = 0; i < this.n.length; i++) {
      let txt = [];
      if (this.n[i] == 1) {
        this.output.push(this.input[i]);
      } else {
        let loop = ceil(this.input[i].length / this.n[i]);
        for (let j = 0; j < this.n[i]; j++) {
          for (let k = 0; k < loop; k++) {
            txt[j] = k == 0 ? "" : txt[j];
            let idx = k == 0 ? j : k * this.n[i] + j;
            txt[j] +=
              this.input[i][idx] == undefined ? "x" : this.input[i][idx];
          }
        }
        this.output.push(txt.join(" "));
      }
    }
  }
}

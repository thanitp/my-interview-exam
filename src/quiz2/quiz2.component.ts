import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz2",
  templateUrl: "./quiz2.component.html",
  styleUrls: ["./quiz2.component.css"]
})
export class Quiz2Component implements OnInit {
  constructor() {}
  divisorsList: any = [];
  outputs: any = [];
  input: any = [15, 18, 6];

  ngOnInit() {
    for (var i = 0; i < this.input.length; i++) {
      var msg = "";
      this.divisorsList = [];
      this.divisors(this.input[i]);
      let sum = 0;
      for (let i = 0; i < this.divisorsList.length - 1; i++) {
        sum += this.divisorsList[i];
      }

      console.log(sum);
      if (this.input[i] == sum) msg = "perfect";
      else if (this.input[i] > sum) msg = "deficient";
      else if (this.input[i] < sum) msg = "abundant";
      this.outputs.push(msg);
    }
  }

  divisors = n =>
    [...Array(n + 1).keys()].slice(1).reduce((s, a) => {
      var divisor = !(n % a) && a;
      if (divisor) this.divisorsList.push(divisor);
      return s + divisor;
    }, 0);
}

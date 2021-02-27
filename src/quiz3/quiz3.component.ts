import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz3",
  templateUrl: "./quiz3.component.html",
  styleUrls: ["./quiz3.component.css"]
})
export class Quiz3Component implements OnInit {
  input: any = [
    "48 65 6C 6C 6F 20 77 6F 72 6C 64 21",
    "43 6F 64 69 6E 47 61 6D 65 20 72 6F 63 6B 27 73",
    "54 68 65 20 48 69 74 63 68 68 69 6B 65\
        72 27 73 20 47 75 69 64 65 20 74 6F 20\
        74 68 65 20 47 61 6C 61 78 79 2E",
    "49 20 6c 6f 76 65 20 54 69 73 63 6f 20 42 61 6e 6b 20"
  ];
  outputs: any = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.input.length; i++) {
      let splt = this.input[i].split(" ");
      let msg = "";
      for (let j = 0; j < splt.length; j++) {
        msg += this.hexToAscii(splt[j]);
      }
      this.outputs.push(msg);
    }
  }

  hexToAscii(str1) {
    var hex = str1.toString();
    var str = "";
    for (var n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
  }
}

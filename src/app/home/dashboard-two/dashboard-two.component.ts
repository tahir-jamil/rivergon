import { Component, OnInit } from "@angular/core";
import * as platformModule from "tns-core-modules/platform";

@Component({
  selector: "ns-dashboard-two",
  templateUrl: "./dashboard-two.component.html",
  styleUrls: ["./dashboard-two.component.scss"],
  moduleId: module.id
})

export class DashboardTwoComponent implements OnInit {

  imgWidth;
  imgHeight;

  constructor() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.imgWidth = deviceWidth * 0.70;
    this.imgHeight = deviceHeight * 0.80;
  }

  ngOnInit() {
    //
  }

}

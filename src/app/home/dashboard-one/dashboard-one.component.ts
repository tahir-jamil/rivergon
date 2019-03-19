import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-dashboard-one",
  templateUrl: "./dashboard-one.component.html",
  styleUrls: ["./dashboard-one.component.scss"],
  moduleId: module.id
})
export class DashboardOneComponent implements OnInit {

  arrays = [[
    { name: "Coffee", icon: String.fromCharCode(0xf0f4) },
    { name: "Eye", icon: String.fromCharCode(0xf06e) },
    { name: "Ball", icon: String.fromCharCode(0xf1e3) },
    { name: "info", icon: String.fromCharCode(0xf129) }
  ], [
    { name: "Hotel", icon: String.fromCharCode(0xf0fd) },
    { name: "Cat", icon: String.fromCharCode(0xf092) },
    { name: "Cheer", icon: String.fromCharCode(0xf79f) },
    { name: "Present", icon: String.fromCharCode(0xf06b) }
  ], [
    { name: "Chair Club", icon: String.fromCharCode(0xf0f4) },
    { name: "Curency", icon: String.fromCharCode(0xf155) },
    { name: "Key", icon: String.fromCharCode(0xf084) },
    { name: "Menu", icon: String.fromCharCode(0xf0cb) }
  ]];

  constructor() {
    //
  }

  ngOnInit() {
    //
  }

}

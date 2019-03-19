import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import * as platformModule from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "tu-bottom-bar",
  templateUrl: "./bottom-bar.component.html",
  styleUrls: ["./bottom-bar.component.scss"],
  moduleId: module.id
})
export class BottomBarComponent implements OnInit {

  @Input() visible = true;
  @ViewChild("bottomBar") bottomBar: ElementRef;

  bottomMenu = [
    { id: 0, name: "x square", icon: String.fromCharCode(0xf073)},
    { id: 1, name: "Oil", icon: String.fromCharCode(0xf043) },
    { id: 2, name: "Delivery", icon: String.fromCharCode(0xf0d1) },
    { id: 3, name: "Prize", icon: String.fromCharCode(0xf091) },
    { id: 4, name: "Special", icon: String.fromCharCode(0xf02b) },
    { id: 5, name: "Speed", icon: String.fromCharCode(0xf073) }
  ];

  imgHeight: any = "";
  imgWidth: any = "";
  badgeHeight: any = "";
  badgeWidth: any = "";

  activeIndex = 0;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.imgHeight = deviceHeight * 0.035;
    this.imgWidth = deviceWidth * 0.055;

    this.badgeHeight = deviceHeight * 0.03;
    this.badgeWidth = deviceWidth * 0.05;
  }

  onChangeIndex(args) {
    this.activeIndex = args;
    this.visible = true;

    // switch (this.activeIndex) {
    //   case 0: {
    //     this.routerExtensions.navigate([""], {

    //       transition: {
    //         name: "fade",
    //         curve: "linear"
    //       }
    //     });
    //   }
    //     break;
    //   case 1: {
    //     this.routerExtensions.navigate(["home/inventory"], {

    //       transition: {
    //         name: "fade",
    //         curve: "linear"
    //       }
    //     });
    //   }
    //     break;
    //   case 2: {
    //     this.routerExtensions.navigate(["home/cart"], {

    //       transition: {
    //         name: "fade",
    //         curve: "linear"
    //       }
    //     });
    //   }
    //     break;
    //   case 3: {
    //     this.routerExtensions.navigate(["home/more"], {
    //       transition: {
    //         name: "fade",
    //         curve: "linear"
    //       }
    //     });
    //   }
    //     break;

    //   default:
    //     break;
    // }
  }

  get activeIndexValue() {
    return this.activeIndex;
  }

  imgSrc(item) {
    if (this.activeIndex === item.id) {
      return item.activeImg;
    } else {
      return item.img;
    }
  }


  // onLoaded() {
  //   setTimeout(() => {
  //     this.globalService.bottomBarHeight = this.bottomBar.nativeElement.getMeasuredHeight() / screen.mainScreen.scale;
  //   }, 50);
  // }
}

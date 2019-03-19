import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    components = [
        { component: "dashbaordOne" },
        { component: "dashbaordTwo" }
    ];
    
    currentPagerIndex = 5;
    latestReceivedIndex = 0;

    constructor() {
        //
    }

    ngOnInit(): void {
        //
    }

    prevPage() {
      //
    }

    nextPage() {
        //
    }

    onIndexChanged($event) {
        this.latestReceivedIndex = $event.newIndex;
    }

    pageChanged(index: number) {
        console.log(`pageChanged ${JSON.stringify(index)}`);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    templateSelector = (item: any) => {
        return item.component;
    }
}

import { Component, OnInit, ViewChild } from "@angular/core";
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
    items: any;
    @ViewChild("pager") pager: any;

    constructor() {
        //
    }

    ngOnInit(): void {
        //
    }

    loadedImage($event) {
        console.log(`loaded image ${JSON.stringify($event)}`);
    }

    prevPage() {
        // this.debugObj(this.pager);
        // const newIndex = Math.max(0, this.currentPagerIndex - 1);
        // this.currentPagerIndex = newIndex;
        // this.latestReceivedIndex = newIndex;
    }

    nextPage() {
        // const newIndex = Math.min(this.numItems - 1, this.currentPagerIndex + 1);
        // this.currentPagerIndex = newIndex;
        // this.latestReceivedIndex = newIndex;
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

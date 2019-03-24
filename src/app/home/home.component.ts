import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    title = "";

    components = [
        { component: "dashbaordOne" },
        { component: "dashbaordTwo" }
    ];
    
    currentPagerIndex = 0;
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
        this.latestReceivedIndex = $event.value;

        switch (this.latestReceivedIndex) {
            case 0:
                {
                    this.title = "Dashboard view";
                }
                break;
            case 1:
                {
                    this.title = "Profile view";
                }
                break;
        
            default:
                break;
        }
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

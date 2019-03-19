import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { BottomBarComponent } from "./bottom-bar";
import { DashboardOneComponent } from "./dashboard-one/dashboard-one.component";
import { PagerModule } from "nativescript-pager/angular";
import { DashboardTwoComponent } from "./dashboard-two/dashboard-two.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        PagerModule
    ],
    declarations: [
        HomeComponent,
        BottomBarComponent,
        DashboardOneComponent,
        DashboardTwoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

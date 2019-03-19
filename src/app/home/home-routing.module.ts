import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { DashboardOneComponent } from "./dashboard-one/dashboard-one.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "dashboardOne", component: DashboardOneComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }

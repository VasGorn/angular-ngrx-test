import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SettingsComponent} from "./components/settings/Settings.component";
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";

const routes: Routes = [
  {
    path: "settings",
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("settings", reducers),
  ],
})
export class SettingsModule {}

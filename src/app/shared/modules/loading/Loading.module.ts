import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LoadingComponent} from "./components/loading/Loading.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
})
export class LoadingModule {}

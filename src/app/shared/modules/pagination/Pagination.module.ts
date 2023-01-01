import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PaginationComponent} from "./components/pagination/Pagination.component";
import {UtilsService} from "../../services/Utils.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}

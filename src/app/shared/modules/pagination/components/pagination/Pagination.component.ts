import {Component, Input, OnInit} from "@angular/core";
import {UtilsService} from "src/app/shared/services/Utils.service";

@Component({
  selector: "ant-pagination",
  templateUrl: "./Pagination.component.html",
  styleUrls: ["./Pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input("total") totalProps: number = 0;
  @Input("limit") limitProps: number = 0;
  @Input("currentPage") currentPageProps: number = 0;
  @Input("url") urlProps: string = "";

  pagesCount: number = 0;
  pages: number[] = [];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}

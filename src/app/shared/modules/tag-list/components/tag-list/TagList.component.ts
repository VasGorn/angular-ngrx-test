import {Component, Input, OnInit} from "@angular/core";
import {PopularTagType} from "src/app/shared/types/PopularTag.type";

@Component({
  selector: "ant-tag-list",
  templateUrl: "./TagList.component.html",
  styleUrls: ["./TagList.component.scss"],
})
export class TagListComponent implements OnInit {
  @Input("tags") tagsProps: PopularTagType[] = [];

  constructor() {}

  ngOnInit(): void {}
}

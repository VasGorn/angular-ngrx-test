import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {GetFeedResponseInterface} from "src/app/shared/modules/feed/types/GetFeedResponse.interface";

@Component({
  selector: "ant-global-feed",
  templateUrl: "./GlobalFeed.component.html",
  styleUrls: ["./GlobalFeed.component.scss"],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl: string = "/articles";

  constructor() {}

  ngOnInit(): void {}
}

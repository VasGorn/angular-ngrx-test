import {Component} from "@angular/core";

@Component({
  selector: "ant-global-feed",
  templateUrl: "./GlobalFeed.component.html",
  styleUrls: ["./GlobalFeed.component.scss"],
})
export class GlobalFeedComponent {
  apiUrl: string = "/articles";
}

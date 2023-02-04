import {Component} from "@angular/core";

@Component({
  selector: "ant-your-feed",
  templateUrl: "./YourFeed.component.html",
  styleUrls: ["./YourFeed.component.scss"],
})
export class YourFeedComponent {
  apiUrl: string = "/articles/feed";
}

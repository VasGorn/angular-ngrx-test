import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: "ant-tag-feed",
  templateUrl: "./TagFeed.component.html",
  styleUrls: ["./TagFeed.component.scss"],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string = "";
  tagName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = this.route.snapshot.paramMap.get("slug");
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}

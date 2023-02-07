import {Component, OnInit} from "@angular/core";

@Component({
  selector: "ant-create-article",
  templateUrl: "./CreateArticle.component.html",
  styleUrls: ["./CreateArticle.component.scss"],
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: "foo",
    description: "bar",
    body: "zoo",
    tagList: ["123", "456"],
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(res: any): void {
    console.log("onSubmit in parent", res);
  }
}

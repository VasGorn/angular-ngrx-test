import {Component, Input, OnInit} from "@angular/core";
import {ArticleRequestInterface} from "src/app/shared/types/ArticleRequest.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: "ant-article-form",
  templateUrl: "./ArticleForm.component.html",
  styleUrls: ["./ArticleForm.component.scss"],
})
export class ArticleFormComponent implements OnInit {
  private readonly NOT_INITIALIZED: string = "not initialized";

  @Input("initialValues") initialValuesProps: ArticleRequestInterface = {
    title: this.NOT_INITIALIZED,
    description: this.NOT_INITIALIZED,
    body: this.NOT_INITIALIZED,
    tagList: [],
  };
  @Input("isSubmitting") isSubmittingProps: boolean = false;
  @Input("errors") errorsProps: BackendErrorsInterface | null = null;

  constructor() {}

  ngOnInit(): void {}
}

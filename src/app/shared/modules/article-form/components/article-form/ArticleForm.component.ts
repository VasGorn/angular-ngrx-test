import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArticleRequestInterface} from "src/app/shared/types/ArticleRequest.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: "ant-article-form",
  templateUrl: "./ArticleForm.component.html",
  styleUrls: ["./ArticleForm.component.scss"],
})
export class ArticleFormComponent implements OnInit {
  private readonly NOT_INITIALIZED: string = "not initialized";
  private readonly NULL_ARTICLE_REQUEST: ArticleRequestInterface = {
    title: this.NOT_INITIALIZED,
    description: this.NOT_INITIALIZED,
    body: this.NOT_INITIALIZED,
    tagList: [],
  };

  @Input("initialValues") initialValuesProps: ArticleRequestInterface =
    this.NULL_ARTICLE_REQUEST;
  @Input("isSubmitting") isSubmittingProps: boolean = false;
  @Input("errors") errorsProps: BackendErrorsInterface | null = null;

  @Output("articleSubmit") articleSubmitEvent =
    new EventEmitter<ArticleRequestInterface>();

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(" "),
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}

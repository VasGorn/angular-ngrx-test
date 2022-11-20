import {Component, Input, OnInit} from "@angular/core";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: "ant-backend-error-messages",
  templateUrl: "./BackendErrorMessages.component.html",
  styleUrls: ["./BackendErrorMessages.component.scss"],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input("backendErrors") backendErrorsProps: BackendErrorsInterface | null =
    {};

  errorMessages: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    const backendErrors: BackendErrorsInterface = this.backendErrorsProps || {};

    this.errorMessages = Object.keys(backendErrors).map((name: string) => {
      const messages = backendErrors[name].join(", ");
      return `${name} ${messages}`;
    });
  }
}

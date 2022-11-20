import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BackendErrorMessagesComponent} from "./components/backend-error-messages/BackendErrorMessages.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}

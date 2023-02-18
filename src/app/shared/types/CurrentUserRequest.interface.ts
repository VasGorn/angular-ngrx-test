import {CurrentUserInterface} from "./currentUser.interface";

export interface CurrentUserRequestInterface extends CurrentUserInterface {
  password: string;
}

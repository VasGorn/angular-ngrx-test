import {Input, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AddToFavoritesComponent} from "./components/add-to-favorites/AddToFavorites.component";

@NgModule({
  declarations: [AddToFavoritesComponent],
  imports: [CommonModule],
  exports: [AddToFavoritesComponent],
})
export class AddToFavoritesModule {}

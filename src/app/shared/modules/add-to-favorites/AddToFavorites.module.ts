import {Input, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AddToFavoritesComponent} from "./components/add-to-favorites/AddToFavorites.component";
import {AddToFavoritesService} from "./services/add-to-favorites.service";
import {EffectsModule} from "@ngrx/effects";
import {AddToFavoritesEffect} from "./store/effects/AddToFavorites.effect";

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}

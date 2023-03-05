import {Component, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {addToFavoritesAction} from "../../store/actions/AddToFavorites.action";

@Component({
  selector: "ant-add-to-favorites",
  templateUrl: "./add-to-favorites.component.html",
  styleUrls: ["./add-to-favorites.component.scss"],
})
export class AddToFavoritesComponent implements OnInit {
  @Input("isFavorited") isFavoritedProps: boolean = false;
  @Input("favoritesCount") favoritesCountProps: number = 0;
  @Input("articleSlug") articleSlug: string = "not initialized";

  favoritesCount: number = 0;
  isFavorited: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}

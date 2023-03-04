import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "ant-add-to-favorites",
  templateUrl: "./add-to-favorites.component.html",
  styleUrls: ["./add-to-favorites.component.scss"],
})
export class AddToFavoritesComponent implements OnInit {
  @Input("isFavorited") readonly isFavoritedProps: boolean = false;
  @Input("favoritesCount") readonly favoritesCountProps: number = 0;
  @Input("articleSlug") readonly articleSlug: string = "";

  favoritesCount: number = 0;
  isFavorited: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}

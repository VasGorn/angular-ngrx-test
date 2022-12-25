import {ProfileInterface} from "./Profile.interface";

export interface ArticleInterface {
  author: ProfileInterface;
  body: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
}

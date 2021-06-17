import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Dish, Recipe } from "./types";

@Injectable({
  providedIn: "root",
})
export class DishesService {
  constructor(private http: HttpClient) {}

  async getDishes() {
    const dishes = await this.http
      .get<Dish[]>("/assets/dishes.json")
      .toPromise();
    return dishes;
  }

  async getRecipes(dishName: string) {
    const recipes = await this.http
      .get<Recipe[]>("assets/recipes.json")
      .toPromise();
    return recipes.filter((recipe) => recipe.dish === dishName);
  }
}
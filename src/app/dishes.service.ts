import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Dish, Recipe } from "./types";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DishesService {
  constructor(private http: HttpClient) {}

  async getDishes() {
    const dishes = await this.http
      .get<Dish[]>(`${environment.api_url}/dishes`)
      // .get<Dish[]>("/assets/dishes.json")
      .toPromise();
    return dishes;
  }

  async getRecipes(dishName: string) {
    const recipes = await this.http
      .get<Recipe[]>(`${environment.api_url}/dishes/recipes`)
      .toPromise();
    return recipes.filter((recipe) => recipe.dish === dishName);
  }

  async saveDish(dish: Dish) {
    const dishSaved = this.http
        .post<Dish>(`${environment.api_url}/dishes`, dish)
        .toPromise();
    return dishSaved;
  }

  async  saveRecipe(recipe: Recipe, dishId: string) {
      const recipeSaved = this.http.post<Recipe>(`${environment.api_url}/dishes/` + dishId + '/recipes', recipe)
          .toPromise();

      return recipeSaved;
  }
}

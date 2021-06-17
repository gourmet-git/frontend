import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Dish, Recipe } from "./types";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DishesService {
  constructor(private http: HttpClient) {}

  async getDishes() {
    const dishes = await this.http
      .get<Dish[]>(`${environment.api_url}/dishes`)
      .toPromise();
    return dishes;
  }

  async getRecipes(dishName: string) {
    const recipes = await this.http
      .get<Recipe[]>(`${environment.api_url}/dishes/recipes`)
      .toPromise();
    return recipes.filter((recipe) => recipe.dish === dishName);
  }
}

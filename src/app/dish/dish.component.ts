import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";

import { Dish, Recipe } from "../types";
import { DishesService } from "../dishes.service";

@Component({
  selector: "app-dish",
  templateUrl: "./dish.component.html",
  styleUrls: ["./dish.component.scss"],
})
export class DishComponent implements OnInit {
  dish: Dish | undefined;
  recipes: Recipe[] | undefined;
  recipe1: Recipe | undefined;
  recipe2: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService
  ) {}

  async ngOnInit(): Promise<void> {
    // First get the dish name from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const dishName = routeParams.get("dishName");

    // Find the dish that corresponds with the name provided in route.
    const dishes = await this.dishesService.getDishes();
    this.dish = dishes.find((dish) => dish.name === dishName);

    // If dish exists, find recipes for that dish.
    if (this.dish && dishName) {
      this.recipes = await this.dishesService.getRecipes(dishName);
      this.recipe1 = this.recipes.length > 0 ? this.recipes[0] : undefined;
      this.recipe2 = this.recipes.length > 1 ? this.recipes[1] : undefined;
    }
  }
}

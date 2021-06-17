import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Dish } from "../types";
import { DishesService } from "../dishes.service";

@Component({
  selector: "app-dish",
  templateUrl: "./dish.component.html",
  styleUrls: ["./dish.component.scss"],
})
export class DishComponent implements OnInit {
  dish: Dish | undefined;

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService
  ) {}

  async ngOnInit(): Promise<void> {
    // First get the dish name from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const dishNameFromRoute = routeParams.get("dishName");

    // Find the dish that corresponds with the name provided in route.
    const dishes = await this.dishesService.getDishes().toPromise();
    this.dish = dishes.find((dish) => dish.name === dishNameFromRoute);
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Dish, dishes } from "../dishes";

@Component({
  selector: "app-dish",
  templateUrl: "./dish.component.html",
  styleUrls: ["./dish.component.scss"],
})
export class DishComponent implements OnInit {
  dish: Dish | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const dishNameFromRoute = routeParams.get("dishName");

    // Find the product that correspond with the id provided in route.
    this.dish = dishes.find((dish) => dish.name === dishNameFromRoute);
  }
}

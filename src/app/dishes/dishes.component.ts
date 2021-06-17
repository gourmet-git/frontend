import { Component, OnInit } from "@angular/core";

import { DishesService } from "../dishes.service";

@Component({
  selector: "app-dishes",
  templateUrl: "./dishes.component.html",
  styleUrls: ["./dishes.component.scss"],
})
export class DishesComponent implements OnInit {
  dishes = this.dishesService.getDishes();

  constructor(private dishesService: DishesService) {}

  ngOnInit(): void {}
}

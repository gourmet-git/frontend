import { Component, OnInit } from "@angular/core";

import { dishes } from "../dishes";

@Component({
  selector: "app-dishes",
  templateUrl: "./dishes.component.html",
  styleUrls: ["./dishes.component.scss"],
})
export class DishesComponent implements OnInit {
  dishes = dishes;

  constructor() {}

  ngOnInit(): void {}
}

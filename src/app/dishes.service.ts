import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Dish } from "./types";

@Injectable({
  providedIn: "root",
})
export class DishesService {
  constructor(private http: HttpClient) {}

  getDishes() {
    return this.http.get<Dish[]>("/assets/dishes.json");
  }
}

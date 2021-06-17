import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DishComponent } from "./dish/dish.component";
import { DishesComponent } from "./dishes/dishes.component";

const routes: Routes = [
  { path: "", component: DishesComponent },
  { path: "dishes/:dishName", component: DishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { DishesComponent } from "./dishes/dishes.component";
import { SubmissionFormComponent } from "./submission-form/submission-form.component";
import { DishComponent } from "./dish/dish.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DishesComponent,
    SubmissionFormComponent,
    DishComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

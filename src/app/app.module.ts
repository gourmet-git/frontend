import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { DishesComponent } from "./dishes/dishes.component";
import {
  SubmissionFormContent,
  SubmissionFormComponent,
} from "./submission-form/submission-form.component";
import { DishComponent } from "./dish/dish.component";
import {
  DishFormContent,
  DishFormComponent,
} from "./dish-form/dish-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DishesComponent,
    SubmissionFormContent,
    SubmissionFormComponent,
    DishComponent,
    DishFormComponent,
    DishFormContent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

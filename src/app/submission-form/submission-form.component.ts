import { Component, Input } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {DishesService} from "../dishes.service";

@Component({
  selector: "submission-form-content",
  templateUrl: "./submission-form-content.html",
  styleUrls: ["./submission-form.component.scss"],
})
export class SubmissionFormContent {
  public dish!: string;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dishesService:DishesService
  ) {}

  recipe = this.formBuilder.group({
    source: "",
    serving_size: "",
    ingredients: this.formBuilder.array([this.formBuilder.control("")]),
    instructions: this.formBuilder.array([this.formBuilder.control("")]),
  });

  get ingredients() {
    return this.recipe.get("ingredients") as FormArray;
  }
  addIngredients() {
    this.ingredients.push(this.formBuilder.control(""));
  }

  get instructions() {
    return this.recipe.get("instructions") as FormArray;
  }
  addInstructions() {
    this.instructions.push(this.formBuilder.control(""));
  }

  onSubmit(): void {

    console.warn("Your recipe has been submitted!", this.recipe.value);
    // this.recipe.reset();
    const recipe = this.recipe.value;

    this.dishesService.saveRecipe(recipe, this.dish)
        .then( r => console.log(r));
    this.activeModal.close("Close click");
  }
}

@Component({
  selector: "submission-form-component",
  templateUrl: "./submission-form.component.html",
})
export class SubmissionFormComponent {
  @Input() dish = "";
  constructor(private modalService: NgbModal) {}

  open(dish: string) {
    const modalRef = this.modalService.open(SubmissionFormContent);
    modalRef.componentInstance.dish = dish;
  }
}

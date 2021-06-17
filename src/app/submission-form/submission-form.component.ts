import { Component } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "submission-form-content",
  templateUrl: "./submission-form-content.html",
})
export class SubmissionFormContent {
  recipe = this.formBuilder.group({
    dish: "",
    source: "",
    serving_size: "",
    ingredients: this.formBuilder.array([this.formBuilder.control("")]),
    instructions: this.formBuilder.array([this.formBuilder.control("")]),
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

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
    this.recipe.reset();
  }
}

@Component({
  selector: "submission-form-component",
  templateUrl: "./submission-form.component.html",
  styleUrls: ["./submission-form.component.scss"],
})
export class SubmissionFormComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(SubmissionFormContent);
  }
}

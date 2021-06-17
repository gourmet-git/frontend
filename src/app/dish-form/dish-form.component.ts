import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "dish-form-content",
  templateUrl: "./dish-form-content.html",
  styleUrls: ["./dish-form.component.scss"],
})
export class DishFormContent {
  dish = this.formBuilder.group({
    dish: "",
    photo: "",
    num_recipes: "",
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    console.warn("Your dish has been submitted!", this.dish.value);
    this.dish.reset();
  }
}

@Component({
  selector: "dish-form-component",
  templateUrl: "./dish-form.component.html",
})
export class DishFormComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(DishFormContent);
  }
}

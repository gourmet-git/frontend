import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {DishesService} from "../dishes.service";

@Component({
  selector: "dish-form-content",
  templateUrl: "./dish-form-content.html",
  styleUrls: ["./dish-form.component.scss"],
})
export class DishFormContent {
  dish = this.formBuilder.group({
    name: "",
    photo: ""
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dishesService: DishesService
  ) {}

  onSubmit(): void {
    const dish =  this.dish.value;
    this.dishesService.saveDish(dish)
        .then( d =>  console.log(d));
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

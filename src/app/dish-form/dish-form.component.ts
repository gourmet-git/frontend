import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "dish-form-content",
  templateUrl: "./dish-form-content.html",
})
export class DishFormContent {
  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}
}

@Component({
  selector: "dish-form-component",
  templateUrl: "./dish-form.component.html",
  styleUrls: ["./dish-form.component.scss"],
})
export class DishFormComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(DishFormContent);
  }
}

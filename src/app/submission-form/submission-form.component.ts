import { Component } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "submission-form-content",
  templateUrl: "./submission-form-content.html",
})
export class SubmissionFormContent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: "submission-form-component",
  templateUrl: "./submission-form.component.html",
})
export class SubmissionFormComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(SubmissionFormContent);
  }
}

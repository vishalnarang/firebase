import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { ModalType } from "../../../../../constants/constants";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent implements OnInit {
  @Input() header: string;
  @Input() minHeight: string = "";
  @Input() minWidth: string = "";
  @Input() modalType: string = ModalType.LARGE;
  @Input() showCross: boolean;
  @Input() headerPosition: boolean;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    if (!this.headerPosition) {
      this.headerPosition = false;
    }
  }

  onCloseClick(e) {
    this.onClose.emit(true);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalType } from '../../../../../constants/constants';
import { CommonService } from '../../../../services/common.service';
import { FirebaseService } from '../../../../services/firebase.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  public modalType = ModalType;
  @Input('details') details: any;
  @Output() closePopup: EventEmitter<any> = new EventEmitter();

  constructor(public fireBaseService: FirebaseService,
    public commonService: CommonService) { }

  ngOnInit(): void {
  }

  close(){
    this.closePopup.emit();
  }

}

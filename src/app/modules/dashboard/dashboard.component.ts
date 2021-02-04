import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ModalType } from '../../../constants/constants';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public organizationList: any;
  public categoryList:  any;
  public showDetailsPopup: boolean;
  public modalType = ModalType;
  public orgainzationPopup: boolean;
  public organisationDetails: any;
  constructor(public fireBaseService: FirebaseService, public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.showLoader = true;
    this.getOrganisationList();
  }

  getOrganisationList(){
    this.fireBaseService.getOrganisationData().subscribe(data => {
      this.organizationList = data;
      this.commonService.showLoader = false;
    });
    let data  = {};
    // this.fireBaseService.addOrganisationData(data);
  }

  showPopup(data){
    this.commonService.showLoader = true;
    this.fireBaseService.getParticularOrganisationData(data).subscribe((data: any) => {
      this.organisationDetails = data.payload.data();
      this.commonService.showLoader = false;
    });
    this.showDetailsPopup =  true;
  }

  closeDetailsPopup($event){
    this.showDetailsPopup =  false;
  }

  showOrgainzationPopup(){
    this.orgainzationPopup = true;
  }

  closePopup($event){
    this.orgainzationPopup = false;
  }

}

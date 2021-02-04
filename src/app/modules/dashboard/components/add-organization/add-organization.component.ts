import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../../../services/firebase.service';
import { constants, ModalType } from '../../../../../constants/constants';
import { CommonService } from '../../../../services/common.service';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { finalize, takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  public modalType = ModalType;
  public addOrganizationForm: FormGroup;
  public categoryList: any;
  public separateDialCode = false;
  public SearchCountryField = SearchCountryField;
  public TooltipLabel = TooltipLabel;
  public CountryISO = CountryISO;
  public PhoneNumberFormat = PhoneNumberFormat;
  public preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.Canada, CountryISO.India];
  @Output() closePopup: EventEmitter<any> = new EventEmitter();
  public alive: boolean = true;
  public errorMsg: any;
  public showError: boolean;

  constructor(public fb: FormBuilder,
    public fireBaseService: FirebaseService,
    public commonService: CommonService) { }

  ngOnInit() {
    this.getCategoriesData();
    this.initForm();
    this.fireBaseService.setResult.pipe(takeWhile(_ => this.alive)).subscribe(data => {
      console.log(">>>>>>>>. data", data);
      if (data == 1) {
        this.close();
      }
      else if (data == 2) {
        this.errorMsg = data;
        this.showError = true;
        this.resetErrors();
      }
    })
  }

  initForm() {
    this.addOrganizationForm = this.fb.group({
      name: [''],
      link: [''],
      address: [''],
      phone: [''],
      categoryId: [''],
      donateLink: [''],
      email: [''],
      shortDescription: [''],
      longDescription: [''],
      twitter: [''],
      youtube: [''],
      instagram: [''],
      facebook: [''],
      awardedDescription: [''],
      isAwarded: [false],
      isVerified: [false],
    })
  }

  getCategoriesData() {
    this.fireBaseService.getCategoriesData().subscribe(data => {
      this.categoryList = data;
      console.log(">>>>>>>>>>>>>>>>>>categoryList", this.categoryList);
    });
  }

  saveData() {
    this.commonService.showLoader = true;
    let obj = {
      address: this.addOrganizationForm.controls.address.value,
      awardDetails: this.addOrganizationForm.controls.awardedDescription.value || '',
      categoryId: this.addOrganizationForm.controls.categoryId.value.categoryId,
      categoryName: this.addOrganizationForm.controls.categoryId.value.categoryName,
      donateLink: this.addOrganizationForm.controls.donateLink.value || '',
      email: this.addOrganizationForm.controls.email.value,
      facebook: this.addOrganizationForm.controls.facebook.value || '',
      instagram: this.addOrganizationForm.controls.instagram.value || '',
      longDescription: this.addOrganizationForm.controls.longDescription.value || '',
      organisationLink: this.addOrganizationForm.controls.link.value || '',
      shortDescription: this.addOrganizationForm.controls.shortDescription.value || '',
      twitter: this.addOrganizationForm.controls.twitter.value || '',
      youtube: this.addOrganizationForm.controls.youtube.value || '',
      organisationPhone: this.addOrganizationForm.controls.phone.value.internationalNumber,
      hasAward: this.addOrganizationForm.controls.isAwarded.value || false,
      hasVerified: this.addOrganizationForm.controls.isVerified.value || false,
      organisationName: this.addOrganizationForm.controls.name.value
    }
    this.fireBaseService.addOrganisationData(obj);
  }

  close() {
    this.commonService.showLoader = false;
    this.closePopup.emit();
  }

  resetErrors() {
    setTimeout(() => {
      this.showError = false;
      this.errorMsg = '';
    }, 2500);
  }

  ngOnDestroy() {
    this.fireBaseService.setResult.next(3);
    this.alive = false;
  }

}

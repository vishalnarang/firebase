import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { constants } from '../../../../../constants/constants';
import { CustomValidators } from '../../../../../utils/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: any;
  public loginForm: FormGroup;
  public showError: boolean;
  public errorMsg: any;

  constructor(
    public formBuilder: FormBuilder,
    public commonService: CommonService,
    public router: Router) { }


  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(constants.emailPattern)]],
      'password': ['', [Validators.required, CustomValidators.strongPassword()]]
    });
  }

  /**
   * Function called when Login form is submitted
  */
  loginAdmin() {
    if (!this.loginForm.valid) {
      return this.commonService.validateAllFormFields(this.loginForm);
    } else {
      this.commonService.showLoader = true;
      if(this.loginForm.controls.email.value == 'admin@yopmail.com' && 
      this.loginForm.controls.password.value == 'Qwerty@123'){
        this.commonService.showLoader = false;
        this.router.navigate(['dashboard']);
      }
      else{
        this.commonService.showLoader = false;
        this.showError =  true;
        this.errorMsg = 'Please enter vaild login creds';
        this.resetErrors();
      }
    }
  }

  resetErrors(){
    setTimeout(() =>{
      this.showError =  false;
      this.errorMsg = '';
    }, 2500);
  }


  public togglePassword(item: string) {
    const el:any = document.getElementById(item);
    if (!this.showPassword) {
      el.setAttribute('type', 'text');
      this.showPassword = true;
    } else {
      el.setAttribute('type', 'password');
      this.showPassword = false;
    }
  }

}




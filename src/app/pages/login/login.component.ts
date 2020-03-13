import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from 'src/app/utils/services/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;

  ok = false;

  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'login-page');
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  logIn() {
    if (this.loginForm.valid) {
      this.appService.login();
    } else {
      this.ok = !this.ok;
      this.Toast(!this.ok);
    }
  }

  Toast(i) {
    if(i){
      this.toastr.error('Hello world!', 'Toastr fun!');
    } else {
      this.toastr.success('Hello world!', 'Toastr fun!');
    }
    
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login-page');
  }
}
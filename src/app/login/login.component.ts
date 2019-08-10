import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) {
    this.loginFormGroup = fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.loginFormGroup.get('email').value.trim(), this.loginFormGroup.get('senha').value.trim());
  }

}

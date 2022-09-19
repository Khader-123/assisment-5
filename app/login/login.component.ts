import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';


// @Component({templateUrl: 'login.component.html'})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string= '';
    userName: any;
    formdata:FormGroup = this.fb.group({
          email: [null,[ Validators.required, Validators.email]],
           password: [null,[ Validators.required ,Validators.minLength(8), Validators.maxLength(16)]]
          });
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields

  get f(): { [key: string]: AbstractControl } {
    return this.formdata.controls;
  }

  get name() {
    return this.formdata.get('userName')!;
  }

  onSubmit() {
        this.submitted = true;
            this.router.navigateByUrl('/home');
            localStorage.setItem('isVisibleNav', 'yes');
    }
}

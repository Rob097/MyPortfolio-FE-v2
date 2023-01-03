import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators, ValidationErrors, AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from 'libs/fuse-lib/src/lib/animations';
import { FuseAlertType } from 'libs/fuse-lib/src/lib/components/alert';
import { AuthService } from 'libs/auth-lib/src/lib/auth.service';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signUpForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signUpForm = this._formBuilder.group({
                email     : ['', [Validators.required, Validators.email]],
                password  : ['', Validators.required],
                matchingPassword  : ['', Validators.required],
                firstName      : ['', Validators.required],
                lastName      : ['', Validators.required],
                agreements: [false, Validators.requiredTrue]
            }, { validators: ConfirmedValidator('password', 'matchingPassword') }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void
    {
        // Hide an eventual alert
        this.showAlert = false;

        // Do nothing if the form is invalid
        if ( this.signUpForm.invalid )
        {

            if(this.signUpForm.get('agreements').invalid){
                this.signUpForm.get('agreements').markAsTouched();
            }

            // Set the alert
            this.alert = {
                type   : 'error',
                message: 'Please, compile all the required fields.'
            };
            // Show the alert
            this.showAlert = true;

            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUp(this.signUpForm.value).subscribe({
            next: (response) => {
                // Navigate to the confirmation required page
                this._router.navigateByUrl('/auth/confirmation-required');
            },
            error: (error) => {
                // Re-enable the form
                this.signUpForm.enable();

                // Reset the form
                this.signUpNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type   : 'error',
                    message: 'Something went wrong, please try again.'
                };

                // Show the alert
                this.showAlert = true;
            }
        });
    }

    checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
        let pass = group.get('password').value;
        let matchingPass = group.get('matchingPassword').value
        return pass === matchingPass ? null : { notSame: true }
    }
    checkBoxError() {
        if(this.signUpForm.touched) {
          const value = this.signUpForm.get('agreements').touched && this.signUpForm.get('agreements').invalid;
          return value;
        }
        return false;
    }
}

function ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

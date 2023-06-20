import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    formContact!: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
        this.buildForm();
	}

    buildForm = () => {
        this.formContact = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{1,}')]],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            company: ['', Validators.required],
            message: ['', Validators.required]
        })
    }

    sendContactData = (event: Event) => {
        event.preventDefault();
        if (this.formContact.valid) {
            console.log('Hola')
        } else this.formContact.markAllAsTouched();
    }
}

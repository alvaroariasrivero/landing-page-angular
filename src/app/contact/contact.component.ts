import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  // Esto es para formulario de template
  // public user: any = {
  //   username: '',
  //   email: '',
  //   password: ''
  // }

  // sendData(): void{
  //   console.log('usuario', this.user);
  // }

  // Esto es para formulario reactivo

  contactForm: FormGroup;
  activeUser: string = 'DonJulio'
  activeEmail: string = 'folasfbkjfs@gmail.com'
  country: string = 'UK'
  nameLabel: string = 'Name'
  passwordLabel: string = 'Password'
  emailLabel: string = 'Email address'

  constructor(private form: FormBuilder) {
    this.contactForm = this.form.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      country: ['UK'] 
    });
  }

  ngOnInit(): void {
    // this.contactForm.get('username')?.setValue(this.activeUser) // Para setear uno
    // this.contactForm.get('username')?.setValidators([Validators.required, Validators.minLength(3)]) // Se pueden meter los validadores desde aquí
    // Las dos siguientes son para quitar validadores
    // this.contactForm.get('username')?.clearValidators();
    // this.contactForm.get('username')?.updateValueAndValidity();
    this.contactForm.patchValue({username: this.activeUser, email: this.activeEmail}) //Para setear varios
    // this.contactForm.get('username')?.disable()
    // this.contactForm.get('email')?.disable()
    this.contactForm.get('country')?.valueChanges.subscribe( value => {
      this.country = value
      this.updateLabels()
    })
  }

  ngOnDestroy(): void {
    console.log('Se destruyó el componente');
  }

  sendData(){
    console.log(this.contactForm);
  }

  hasErrors(controlName: string, errorType: string){
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched
  }

  updateLabels(): void {
    if (this.country === "3") {
      this.nameLabel = 'Nombre';
      this.passwordLabel = 'Contraseña';
      this.emailLabel = 'Dirección email';
    } else {
      this.nameLabel = 'Name';
      this.passwordLabel = 'Password';
      this.emailLabel = 'Email address';
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }



  generatePassword(): void {
    const firstName = (document.getElementById('firstName') as HTMLInputElement)?.value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement)?.value;

    if (firstName && lastName) {
      const generatedPassword = firstName.toLowerCase() + lastName.toLowerCase() + Math.floor(Math.random() * 100);
      (document.getElementById('password') as HTMLInputElement).value = generatedPassword;
      (document.getElementById('confirmPassword') as HTMLInputElement).value = generatedPassword;
    } else {
      alert('Por favor ingrese un nombre y apellido valido.');
    }
  }
}

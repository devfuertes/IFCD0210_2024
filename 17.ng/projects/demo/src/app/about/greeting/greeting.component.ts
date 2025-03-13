import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-greeting',
  imports: [FormsModule],
  template: `
    <p>Hola {{ user || 'amigo' }}</p>
    //Tenemos un evento input
    // 4 eventos input click | input | change | submit
    <input type="text" placeholder="Escribe tu nombre"
    [(ngModel)]=user />//Con [()] hace un evento y el método


    <button (click)="clean()">Borrar</button>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
  `,
})


export class GreetingComponent {
  user = '';
  clean() {
    this.user = '';
  }
  //Método para pasar el evento
  setUserName(event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    return target.value;
  }
}

// <input
//       type="text"
//       placeholder="Escribe tu nombre"
//       (input)="user = setUserName($event)"
//       [value]="user"
//     />

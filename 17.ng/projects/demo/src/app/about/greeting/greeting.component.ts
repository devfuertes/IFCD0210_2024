import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-greeting',
  imports: [FormsModule],
  template: `
    <p>Hola {{ user || 'amigo' }}</p>
<<<<<<< HEAD
    //Tenemos un evento input
    // 4 eventos input click | input | change | submit
    <input type="text" placeholder="Escribe tu nombre"
    [(ngModel)]=user />//Con [()] hace un evento y el método


=======
    <!-- <input
      type="text"
      placeholder="Escribe tu nombre"
      [value]="user"
      (input)="setUserName($event)"
    /> -->
    <input type="text" placeholder="Escribe tu nombre" [(ngModel)]="user" />
>>>>>>> 0976fb62be418c65c49dbf3a3a670571274ed36b
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
<<<<<<< HEAD
  //Método para pasar el evento
  setUserName(event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    return target.value;
  }
=======

  // setUserName(event: Event) {
  //   const target: HTMLInputElement = event.target as HTMLInputElement;
  //   this.user = target.value;
  // }
>>>>>>> 0976fb62be418c65c49dbf3a3a670571274ed36b
}

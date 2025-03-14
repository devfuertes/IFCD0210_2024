import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuItem } from '../../../app.component';

@Component({
  selector: 'cas-menu',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of items(); track item.path) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{
              item.label
            }}</a>
          </li>
        }
        @if (isLogin) {
          <li>
            <a [routerLink]="'/profile'">Profile</a>
          </li>
          <li>
            <a [routerLink]="'/logout'">Logout</a>
          </li>
        } @else {
          <li>
            <a [routerLink]="'/login'">Login</a>
          </li>
          <li>
            <a [routerLink]="'/register'">Register</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
    nav {
      background-color: #333;
      color: white;
    }
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;
    }
    li {
      padding: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .active {
      font-weight: bold;
      transform: scale(1.2);
    }
  `,
})
export class MenuComponent {
  // @Input() items: MenuItem[] = [];
  items = input<MenuItem[]>();
  isLogin = false;
<<<<<<< HEAD
  constructor() {
    this.items = [
      {
        path: '/home',
        label: 'Home',
      },
      {
        path: '/films',
        label: 'Films',
      },
      {
        path: '/about',
        label: 'About',
      },


      this.item = routers.filter((route) => route.path !== '**' && route.path !='').map((route) => {
        path.route.path!,
        label:route.data!['label'] as string,

      })




    ];
  }
=======
>>>>>>> 0976fb62be418c65c49dbf3a3a670571274ed36b
}

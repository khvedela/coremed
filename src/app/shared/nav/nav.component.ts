import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {AuthService} from "../../services/auth.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '100vw',
        opacity: 1
      })),
      state('closed', style({
        width: 0,
        opacity: 0
      })),
      transition('open => closed', [
        animate('150ms cubic-bezier(0.42, 0, 1, 1)')
      ]),
      transition('closed => open', [
        animate('150ms cubic-bezier(0.42, 0, 1, 1)')
      ]),
    ]),
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items!: MenuItem[];
  isLoggedIn: boolean = this.auth.isLoggedIn;
  status: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label:'home',
        icon:'pi pi-home',
        routerLink: ['']
      },
      {
        label:'feed',
        icon:'pi pi-book',
        routerLink: ['feed'],
        visible: this.isLoggedIn
      }
    ];

    this.isLoggedIn = this.auth.isLoggedIn;
    console.log(this.auth.isLoggedIn);
  }

  logout() {
    this.auth.SignOut();
  }

  openMenu() {
    this.status = !this.status
  }

  changeRoute(route: string) {
    this.router.navigate([route])
      .then(() => this.status = false);
  }
}

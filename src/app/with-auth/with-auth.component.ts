import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-with-auth',
  templateUrl: './with-auth.component.html',
  styleUrls: ['./with-auth.component.css']
})
export class WithAuthComponent implements OnInit {
  menuItems = [{
    name: 'Dashboard',
    url: '/dashboard',
    show: true,
    isDisabled: true
  },
  {
    name: 'Chart',
    url: '/chart',
    show: true,
    isDisabled: true
  }
];
  activeUrl = '';
  constructor(private route: Router) {
    this.activeUrl = this.route.routerState.snapshot.url;
   }

  ngOnInit() {
  }

}

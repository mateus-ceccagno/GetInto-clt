import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // TODO: Logout
  isCollapsed = true;

  constructor(
    //private router: Router
  ) {}

  ngOnInit(): void {}
}

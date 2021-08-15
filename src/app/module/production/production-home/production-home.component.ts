import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-home',
  templateUrl: './production-home.component.html',
  styleUrls: ['./production-home.component.scss']
})
export class ProductionHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hiiii')
  }

}

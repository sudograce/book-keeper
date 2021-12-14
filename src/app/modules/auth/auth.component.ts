import { Component, OnInit } from '@angular/core';

import { APP_NAME } from 'src/app/constants/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  constructor() { }

  applicationName = APP_NAME;

  ngOnInit(): void {
    console.log('applicationName', this.applicationName)
  }

}
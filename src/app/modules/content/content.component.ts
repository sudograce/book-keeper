import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  userName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('username') as string;
  }
}

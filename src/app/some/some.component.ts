import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  public shouldDisplayTitle: boolean;

  constructor() { }

  ngOnInit(): void {
    this.shouldDisplayTitle = true;
  }
}

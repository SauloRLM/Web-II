import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //current date propiedad
  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  faAngleRight = faChevronRight;
  faAngleLeft = faChevronLeft;


  constructor() {
  }

  ngOnInit(): void {
    document.getElementById('Home').style.fontWeight = 'bold';
    document.getElementById('Projet').style.fontWeight = 'normal';
    document.getElementById('Contact').style.fontWeight = 'normal';
  }
}



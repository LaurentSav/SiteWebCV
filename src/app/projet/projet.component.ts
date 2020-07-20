import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.sass']
})
export class ProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('Home').style.fontWeight = 'normal';
    document.getElementById('Projet').style.fontWeight = 'bold';
    document.getElementById('Contact').style.fontWeight = 'normal';
  }

}

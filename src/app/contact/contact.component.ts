import { Component, OnInit } from '@angular/core';
import { faLinkedin, faTwitter, faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('Home').style.fontWeight = 'normal';
    document.getElementById('Projet').style.fontWeight = 'normal';
    document.getElementById('Contact').style.fontWeight = 'bold';
  }

}

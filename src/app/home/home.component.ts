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
  slideIndex = 1;
  constructor() {
  }

  ngOnInit(): void {
    document.getElementById('Home').style.fontWeight = 'bold';
    document.getElementById('Projet').style.fontWeight = 'normal';
    document.getElementById('Contact').style.fontWeight = 'normal';
    this.showSlides(1);
  }
  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {this.slideIndex = 1; }
    if (n < 1) {this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}



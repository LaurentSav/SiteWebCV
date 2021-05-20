import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.sass']
})
export class PianoComponent implements OnInit {

  notes = [

    /* 2 */
    { key: 81, sound: this.createSound('../../../assets/Piano/c2.ogg') },
    { key: 90, sound: this.createSound('../../../assets/Piano/c-2.ogg') },
    { key: 83, sound: this.createSound('../../../assets/Piano/d2.ogg') },
    { key: 69, sound: this.createSound('../../../assets/Piano/d-2.ogg') },
    { key: 68, sound: this.createSound('../../../assets/Piano/e2.ogg') },
    { key: 70, sound: this.createSound('../../../assets/Piano/f2.ogg') },
    { key: 84, sound: this.createSound('../../../assets/Piano/f-2.ogg') },
    { key: 71, sound: this.createSound('../../../assets/Piano/g2.ogg') },
    { key: 89, sound: this.createSound('../../../assets/Piano/g-2.ogg') },
    { key: 72, sound: this.createSound('../../../assets/Piano/a2.ogg') },
    { key: 85, sound: this.createSound('../../../assets/Piano/a-2.ogg') },
    { key: 74, sound: this.createSound('../../../assets/Piano/b2.ogg') },

    /* 3 */
    { key: 1, sound: this.createSound('../../../assets/Piano/c3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/c-3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/d3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/d-3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/e3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/f3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/f-3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/g3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/g-3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/a3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/a-3.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/b3.ogg') },

    /* 4 */
    { key: 1, sound: this.createSound('../../../assets/Piano/c4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/c-4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/d4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/d-4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/e4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/f4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/f-4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/g4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/g-4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/a4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/a-4.ogg') },
    { key: 1, sound: this.createSound('../../../assets/Piano/b4.ogg') }

  ];



  constructor() { }

  ngOnInit(): void {

  }
  createSound(file) {
    let sound = new Audio(file);

    return {
      start() {
        sound.play();
      },
      stop() {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 1.0;
      },

    };
  }
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event) {
    console.log(event.key.charCodeAt(0));
    this.notes.forEach((note) => {
      if (note.key === event.key.charCodeAt(0)) {

        note.sound.start();
      }
    });

  }
  @HostListener('document:keyup', ['$event'])
  onKeyUp(event){
    console.log(event.key.charCodeAt(0));
    this.notes.forEach((note) => {
      if (note.key === event.key.charCodeAt(0)) {

        note.sound.stop();
      }
    });
  }




}

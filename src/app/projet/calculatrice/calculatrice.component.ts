import { Component, OnInit } from '@angular/core';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.sass']
})
export class CalculatriceComponent implements OnInit {
  fabackspace = faBackspace;

  private input: any[] = ['', '', ''];
  private leString = '';
  private output = '';

  constructor() { }

  ngOnInit(): void {
    document.getElementById('Resultat').innerHTML = '';
  }

  public Clear(){
    this.leString = '';
    this.input = ['', '', ''];
    this.output = '';
    this.Affichage();
  }

  public ClearForm(){
    this.leString = '';
    if (this.input[1] === '+' || this.input[1] === '-' || this.input[1] === '*' || this.input[1] === '/'){
      this.input[2] = '';
    }else{
      this.input[0] = '';
    }
    this.Affichage();
  }

  public InputChiffre(chiffre: string){
    this.leString += chiffre;
    if (this.input[1] === '+' || this.input[1] === '-' || this.input[1] === '*' || this.input[1] === '/'){
      this.input[2] = this.leString;
    }else{
      this.input[0] = this.leString;
    }
    this.Affichage();
  }

  public InputVirgule(virgule: string){
    if (this.leString.indexOf('.') <= -1){
      this.InputChiffre('.');
    }
  }

  public InputOperator(Operator: string){
    if (this.input[2] !== ''){
      this.Equal();
    }
    this.leString = '';
    this.input[1] = Operator;
    this.Affichage();
  }

  public Erase(){
    this.leString = this.leString.substring(0, this.leString.length - 1);
    if (this.input[1] === '+' || this.input[1] === '-' || this.input[1] === '*' || this.input[1] === '/'){
      this.input[2] = this.leString;
    }else{
      this.input[0] = this.leString;
    }
    this.Affichage();
  }

  public Equal(){
    this.leString = '';
    this.output += this.calcul( parseFloat(this.input[0]), this.input[1], parseFloat(this.input[2]));
    this.input = [this.output, '', ''];
    this.output = '';
    this.Affichage();

  }

  public calcul(num1: number, operateur: string, num2: number){
    if (operateur === '+'){
      return num1 + num2;
    }
    if (operateur === '-'){
      return num1 - num2;
    }
    if (operateur === '*'){
      return num1 * num2;
    }
    if (operateur === '/'){
      return num1 / num2;
    }
  }

  public Affichage(){
    document.getElementById('Resultat').innerHTML = this.input[0] + ' ' + this.input[1] + ' ' + this.input[2];
  }


}

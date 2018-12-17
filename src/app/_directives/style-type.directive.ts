import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStyleType]'
})
export class StyleTypeDirective implements OnInit {

  @Input() pokemonType: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    switch (this.pokemonType.toLowerCase()) {
      case 'normal':
        this.setBackground('#A8A878');
        break;
      case 'fire':
        this.setBackground('#F08030');
        break;
      case 'fighting':
        this.setBackground('#C02F27');
        break;
      case 'water':
        this.setBackground('#6890F0');
        break;
      case 'flying':
        this.setBackground('#A890F0');
        break;
      case 'grass':
        this.setBackground('#79C750');
        break;
      case 'poison':
        this.setBackground('#A040A0');
        break;
      case 'electric':
        this.setBackground('#F8CF30');
        break;
      case 'ground':
        this.setBackground('#E0C068');
        break;
      case 'psychic':
        this.setBackground('#F75888');
        break;
      case 'rock':
        this.setBackground('#B8A038');
        break;
      case 'ice':
        this.setBackground('#98D8D7');
        break;
      case 'bug':
        this.setBackground('#A8B71F');
        break;
      case 'dragon':
        this.setBackground('#7038F8');
        break;
      case 'ghost':
        this.setBackground('#705898');
        break;
      case 'dark':
        this.setBackground('#715848');
        break;
      case 'steel':
        this.setBackground('#B8B8D0');
        break;
      case 'fairy':
        this.setBackground('#EE99AB');
        break;
      default:
        this.setBackground('#689F90');
    }
  }

  setBackground(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

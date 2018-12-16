import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../_services/pokedex.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pokemon: any = [];

  constructor(private pokedexService: PokedexService,
              private navController: NavController) {
  }

  ngOnInit(): void {
    this.pokedexService.getAllPokemon()
      .subscribe((pokemon: any) => {
        console.log('pokemon', pokemon);
        this.pokemon = pokemon;
      });
  }

  goToPokemonDetails(index: number) {
    this.navController.navigateForward(`/pokemon/${index}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../_services/pokedex.service';
import { NavController } from '@ionic/angular';
import { DexGoConstants } from '../_utilities/DexGoConstants';

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
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokedexService.getAllPokemon()
      .subscribe((pokemon) => this.pokemon = pokemon);
  }

  goToPokemonDetails(index: number) {
    this.navController.navigateForward(`/pokemon/${index}`);
  }

  invalidateCache() {
    this.pokedexService.clearCache(DexGoConstants.CACHE_ALL_POKEMON)
      .then(() => console.log('Cache successfully cleared'));
  }

  forceReload(refresher) {
    this.pokedexService.getAllPokemon(refresher)
      .subscribe((pokemon) => this.pokemon = pokemon);
  }

  // TODO: Add a correct header function to seperate pokemon generations
  myHeaderFn(record, recordIndex, records) {
    if (recordIndex % 20 === 0) {
      return 'Header ' + recordIndex;
    }
    return null;
  }

}

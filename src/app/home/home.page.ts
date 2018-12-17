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

  navigateToPokemonDetailPage(url: string) {
    const splitUrl = url.split('/');
    const id = splitUrl[splitUrl.length - 2];

    this.navController.navigateForward([`pokemon-detail/${id}`]);
  }

  invalidateCache() {
    this.pokedexService.clearCache(DexGoConstants.CACHE_ALL_POKEMON)
      .then(() => console.log('Cache successfully cleared'));
  }

  forceReload(refresher) {
    this.pokedexService.getAllPokemon(refresher)
      .subscribe((pokemon) => this.pokemon = pokemon);
  }

  setupPokemonGenerationsHeader(record, recordIndex, records) {
    if (recordIndex === 0) {
      return 'Generation 1';
    } else if (recordIndex === 151) {
      return 'Generation 2';
    } else if (recordIndex === 251) {
      return 'Generation 3';
    } else if (recordIndex === 386) {
      return 'Generation 4';
    } else if (recordIndex === 493) {
      return 'Generation 5';
    } else if (recordIndex === 649) {
      return 'Generation 6';
    } else if (recordIndex === 721) {
      return 'Generation 7';
    } else if (recordIndex === 802) {
      return 'Other';
    }

    return null;
  }

}

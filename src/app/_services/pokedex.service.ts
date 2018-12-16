import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CacheService } from 'ionic-cache';
import { DexGoConstants } from '../_utilities/DexGoConstants';
import { map as _map } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemon: Observable<any>;

  constructor(private http: HttpClient,
              private cacheService: CacheService) {
  }

  getAllPokemon(refresher?) {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const cacheKey = DexGoConstants.CACHE_ALL_POKEMON;
    let request = this.http.get(url)
      .pipe(
        map((data: any) => this.insertSpriteImages(data.results)),
        tap((pokemon: any) => this.pokemon = pokemon));

    if (refresher) {
      request = this.http.get(url)
        .pipe(
          map((data: any) => this.insertSpriteImages(data.results)),
          tap((pokemon) => this.pokemon = pokemon));
      const delayType = 'all'; // Send a request to the server every time
      const ttl = 60 * 60 * 12; // 12 hours
      const response = this.cacheService
        .loadFromDelayedObservable(cacheKey, request, DexGoConstants.CACHE_ALL_POKEMON, ttl, delayType);

      response
        .subscribe((data: any) => {
          refresher.target.complete();
          return data;
        });
    }

    return this.cacheService.loadFromObservable(cacheKey, request);
  }

  clearCache = (key: string) => this.cacheService.removeItem(key);

  getPokemonById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  insertSpriteImages(pokemon) {
    return _map(pokemon, (item: any) => {
      // Get the ID of the pokemon from its url property
      const id = item.url.split('/')[6];
      item.sprites = {
        back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
        back_female: null,
        back_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`,
        back_shiny_female: null,
        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        front_female: null,
        front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
        front_shiny_female: null
      };
      return item;
    });
  }

}

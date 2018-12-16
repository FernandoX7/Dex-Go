import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemon: any = [];

  constructor(private http: HttpClient) {
  }

  getAllPokemon() {
    if (this.pokemon.length) {
      return of(this.pokemon);
    } else {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/`)
        .pipe(
          map((data: any) => data.results.slice(0, 151)),
          tap((pokemon) => this.pokemon = pokemon));
    }
  }

  getPokemon(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

}

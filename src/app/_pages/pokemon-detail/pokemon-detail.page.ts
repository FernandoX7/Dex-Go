import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../../_services/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  pokemonID: any;
  pokemonDetails;

  constructor(private route: ActivatedRoute,
              private pokedexService: PokedexService) {
  }

  ngOnInit() {
    this.pokemonID = this.route.snapshot.paramMap.get('id');
    this.getPokemonDetails(this.pokemonID);
  }

  getPokemonDetails(id) {
    this.pokedexService.getPokemonById(id, false)
      .subscribe((result) => this.pokemonDetails = result);
  }

}

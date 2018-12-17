import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  pokemonID: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pokemonID = this.route.snapshot.paramMap.get('id');
  }

}

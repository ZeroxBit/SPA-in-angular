import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: []
})
export class HeroDetailComponent {

    hero:any ={}

    constructor( private activateRoute: ActivatedRoute,
                 private heroService: HeroService
        ) { 
        this.activateRoute.params.subscribe( params => {
            this.hero = this.heroService.GetHeroForID(params['id'])
            console.log(this.hero);
        })
    }


}

import { Component, OnInit } from '@angular/core';
import {HeroService, Hero} from '../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

    heros:Hero[] = []

    constructor( 
        private _herosService: HeroService, 
        private _router : Router
        ) { 

    }

    ngOnInit() {
        this.heros = this._herosService.GetHeros()
    }

    GoHero(index:number){
        this._router.navigate(['/hero-detail',index])
    }

}

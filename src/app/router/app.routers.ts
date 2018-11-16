import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';

import { AboutComponent } from '../components/about/about.component';
import { HeroComponent } from '../components/hero/hero.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';

const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'hero-detail/:id', component: HeroDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS, {useHash: true})

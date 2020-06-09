import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AcercaComponent } from './components/acerca/acerca.component';

export const ROUTES: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'home', component: HomeComponent },
    { path: 'artista', component: ArtistaComponent },
    { path: 'acerca', component: AcercaComponent },
    // vacios o cualquier otro se va al home
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];





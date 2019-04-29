import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CossComponent } from './components/cos_somaEdif/cos_somaEdif.component';
import { SenComponent } from './components/sen_somaEdif/sen_somaEdif.component';
import { TgComponent } from './components/tg_somaEdif/tg_somaEdif.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cosseno', component: CossComponent},
  { path: 'seno', component: SenComponent},
  { path: 'tg', component: TgComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

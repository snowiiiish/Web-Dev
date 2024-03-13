import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AlbumDetailsComponent } from '../album-details/album-details.component';
import { AlbumItemDetailComponent } from '../album-item-detail/album-item-detail.component';
import { AlbumsComponent } from '../albums/albums.component';
import { AppComponent} from '../home/app.component';

const routes: Routes = [
  {path: "home", component: AppComponent},
  {path: "about", component: AboutComponent},
  {path: "albums", component: AlbumsComponent},
  {path: "albums/:title", component: AlbumDetailsComponent},
  {path: "album/:id", component: AlbumItemDetailComponent},
  {path: "", redirectTo: "home", pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
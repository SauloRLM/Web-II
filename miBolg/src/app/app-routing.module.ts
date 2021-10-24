import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  //faltba parentesis en m
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then((m) => m.ArticlesModule), },
  //codigo nuevo
  { path: '', pathMatch: 'full', redirectTo:'articles'},
  //codigo nuevo
  { path: '', pathMatch: 'full', redirectTo:'articles'}, //cuando no se especifique ninguna ruta lo redirija a articulos
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },  
  { path: '**', redirectTo: 'articles'} //cuando escriba una que no existe lo redirije articles
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

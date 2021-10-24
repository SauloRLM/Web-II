import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';

//nuevo
import { RouterModule, Routes } from '@angular/router';

//nuevo falto punto y coma ;

const routes: Routes = [{path:'',component: ArticlesComponent}];

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,    
    ArticlesRoutingModule,
    //nuevo
    RouterModule.forChild(routes)
  ],
  //nuevo
  exports: [RouterModule]
})
export class ArticlesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'prestations',
    loadChildren: () => import('./pages/prestations/prestations.module')
      .then(mod => mod.PrestationsModule)
  },
  {
    path: 'solutions',
    loadChildren: () => import('./pages/solutions/solutions.module')
      .then(mod => mod.SolutionsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module')
      .then(mod => mod.BlogModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./pages/apropos/apropos.module')
      .then(mod => mod.AproposModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

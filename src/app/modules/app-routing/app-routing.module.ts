import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { HeroListComponent} from '../../components/hero-list/hero-list.component';
import { HeroDetailComponent } from '../../components/hero-detail/hero-detail.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
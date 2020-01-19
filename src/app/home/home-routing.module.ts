import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children : [
      {
        path: 'create-tournament',
        loadChildren: () => import('./create-tournament/create-tournament.module').then( m => m.CreateTournamentPageModule)
      },
      {
        path: 'create-player',
        loadChildren: () => import('./create-player/create-player.module').then( m => m.CreatePlayerPageModule)
      },
      {
        path: 'create-team',
        loadChildren: () => import('./create-team/create-team.module').then( m => m.CreateTeamPageModule)
      },

      {
        path: 'welcome-player',
        loadChildren: () => import('./welcome-player/welcome-player.module').then( m => m.WelcomePlayerPageModule)
      },
      {
        path: 'tournaments-list',
        loadChildren: () => import('./tournaments-list/tournaments-list.module').then( m => m.TournamentsListPageModule)
      },
      {
        path: 'players-list',
        loadChildren: () => import('./players-list/players-list.module').then( m => m.PlayersListPageModule)
      },
      {
        path: 'teams-list',
        loadChildren: () => import('./teams-list/teams-list.module').then( m => m.TeamsListPageModule)
      },
      {
        path: 'edit-tournament',
        loadChildren: () => import('./edit-tournament/edit-tournament.module').then( m => m.EditTournamentPageModule)
      },
      {
        path: 'welcome-team',
        loadChildren: () => import('./welcome-team/welcome-team.module').then( m => m.WelcomeTeamPageModule)
      },
      {
        path: 'welcome-tournament',
        loadChildren: () => import('./welcome-tournament/welcome-tournament.module').then( m => m.WelcomeTournamentPageModule)
      },
      {
        path: 'teams-in-tournament-list',
        loadChildren: () => import('./teams-in-tournament-list/teams-in-tournament-list.module').then( m => m.TeamsInTournamentListPageModule)
      }
    ]
  },
  {
    path: 'edit-team',
    loadChildren: () => import('./edit-team/edit-team.module').then( m => m.EditTeamPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

import { Component } from '@angular/core';

// TODO: add an interface to represent a tab.
export interface HomePageTab {
  title: string; // The title of the tab in the tab bar
  icon: string; // The icon of the tab in the tab bar
  path: string; // The route's path of the tab to display
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tabs: HomePageTab[];

  constructor() {
    this.tabs = [
      { title: 'Create player', icon: 'add', path: 'create-player' },
      { title: 'Create team', icon: 'add', path: 'create-team' },
      { title: 'Create tournament', icon: 'edit', path: 'create-tournament' },
      { title: 'Edit tournament', icon: 'edit', path: 'edit-tournament' },
      { title: 'Login page', icon: 'map', path: 'login-page' }, //edit icon
      { title: 'Players list', icon: 'list', path: 'players-list' },
      { title: 'Teams in tournament list', icon: 'list', path: 'teams-in-tournament-list' },
      { title: 'Teams list', icon: 'list', path: 'teams-list' },
      { title: 'Tournaments list', icon: 'list', path: 'tournaments-list' },
      { title: 'Welcome player', icon: 'map', path: 'welcome-player' }, //edit icon
      { title: 'Welcome team', icon: 'map', path: 'edit-tournament' }, //edit icon
      { title: 'Welcome tournament', icon: 'map', path: 'welcome-tournament' } //edit icon
    ];
  }

}
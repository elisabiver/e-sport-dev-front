import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamsInTournamentListPage } from './teams-in-tournament-list.page';

describe('TeamsInTournamentListPage', () => {
  let component: TeamsInTournamentListPage;
  let fixture: ComponentFixture<TeamsInTournamentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsInTournamentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsInTournamentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

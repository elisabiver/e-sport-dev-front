import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayersListPage } from './players-list.page';

describe('PlayersListPage', () => {
  let component: PlayersListPage;
  let fixture: ComponentFixture<PlayersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

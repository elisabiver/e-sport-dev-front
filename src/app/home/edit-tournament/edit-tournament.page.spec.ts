import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTournamentPage } from './edit-tournament.page';

describe('EditTournamentPage', () => {
  let component: EditTournamentPage;
  let fixture: ComponentFixture<EditTournamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTournamentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTournamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TournamentsListPage } from './tournaments-list.page';

describe('TournamentsListPage', () => {
  let component: TournamentsListPage;
  let fixture: ComponentFixture<TournamentsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TournamentsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

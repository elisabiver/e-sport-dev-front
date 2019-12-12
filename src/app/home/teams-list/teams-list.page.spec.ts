import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamsListPage } from './teams-list.page';

describe('TeamsListPage', () => {
  let component: TeamsListPage;
  let fixture: ComponentFixture<TeamsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

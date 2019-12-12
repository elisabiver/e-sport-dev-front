import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcomePlayerPage } from './welcome-player.page';

describe('WelcomePlayerPage', () => {
  let component: WelcomePlayerPage;
  let fixture: ComponentFixture<WelcomePlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

class MockUserService {
  count: number | undefined;
}

describe('AppComponent', () => {
  let component;
  let userService: UserService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: UserService, useClass: MockUserService },
      ],
      // declarations: [
      //   AppComponent
      // ],
    });
    component = TestBed.inject(AppComponent);
    userService = TestBed.inject(UserService);
  });

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    const app = new AppComponent(new UserService());
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-lecture'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing-lecture');
  });

  it(`should have as title 'name'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('Learn how to test your app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain(
      'testing-lecture app is running !'
    );
  });
});

describe('LightswitchComp', () => {
  it('#clicked() should toggle #isOn', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.componentInstance;
    expect(comp.isOn)
      .withContext('off at first') //Add some context for an expect.
      .toBe(false);
    comp.clicked();
    expect(comp.isOn).withContext('on after click').toBe(true);
    comp.clicked();
    expect(comp.isOn).withContext('off after second click').toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.componentInstance;
    expect(comp.message)
      .withContext('off at first')
      .toMatch('The light is Off');
    comp.clicked();
    expect(comp.message)
      .withContext('on after clicked')
      .toMatch('The light is On');
  });
});

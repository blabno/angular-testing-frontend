import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { NEVER, of } from 'rxjs';

describe('AppComponent', () => {
  let apiServiceStub;
  let apiReply;
  beforeEach(() => {
    apiServiceStub = jasmine.createSpyObj('ApiService', ['getQuoteForToday']);
    apiReply = `${Math.random()}`;
    apiServiceStub.getQuoteForToday.and.returnValue(of(apiReply));
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ApiService, useValue: apiServiceStub }]
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should fetch quote for today from the backend', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.quote).toBeUndefined();
    fixture.detectChanges();
    expect(apiServiceStub.getQuoteForToday).toHaveBeenCalledTimes(1);
    expect(app.quote).toEqual(apiReply);
  });
  describe('before reply arrives from the apiService', () => {
    it('should render "Loading..." text', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      apiServiceStub.getQuoteForToday.and.returnValue(NEVER);
      fixture.detectChanges();
      expect(compiled.textContent.trim()).toEqual('Loading...');
    });
  });
  describe('when reply arrives from the apiService', () => {
    it('should render quote in a h1 tag', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.textContent.trim()).toEqual(`Quote for today: "${apiReply}"`);
      expect(compiled.querySelector('h1').textContent.trim()).toEqual(`Quote for today: "${apiReply}"`);
    });
  });
});

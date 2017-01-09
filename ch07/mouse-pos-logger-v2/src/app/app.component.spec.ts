/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, discardPeriodicTasks } from '@angular/core/testing';  
import { AppComponent } from './app.component';

import { MouseTrackBoxComponent } from './mouse-track-box/mouse-track-box.component'; 

import { MySpecialLoggerService } from './my-special-logger.service';
import { AnotherLoggerService } from './another-logger.service';
import { LogLevel } from './log-level.enum';
import {LOG_LEVEL_TOKEN } from './app.tokens';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
       declarations: [AppComponent, MouseTrackBoxComponent],
       providers: [MySpecialLoggerService, AnotherLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', fakeAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
    
    discardPeriodicTasks();
  }));
});

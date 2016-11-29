/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MouseTrackBoxComponent } from './mouse-track-box.component';

import { MySpecialLoggerService } from '../my-special-logger.service';
import { AnotherLoggerService } from '../another-logger.service';
import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from '../app.tokens';

describe('MouseTrackBoxComponent', () => {
  let component: MouseTrackBoxComponent;
  let fixture: ComponentFixture<MouseTrackBoxComponent>;
  let trackArea: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MouseTrackBoxComponent],
      providers: [MySpecialLoggerService, AnotherLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseTrackBoxComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`마우스가 움직일 때마다 INFO 레벨의 로그가 적재되어야 한다.`, fakeAsync(() => {
    fixture.detectChanges();
    expect(component.intervalId).toBeDefined();

    tick(500);
    fixture.detectChanges();

    trackArea = fixture.debugElement.query(By.css('.track-area'));
    trackArea.triggerEventHandler("mousemove", { screenX: 1, screenY: 1 });
    fixture.detectChanges();
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(1);

    tick(500);
    fixture.detectChanges();
    trackArea.triggerEventHandler("mousemove", { screenX: 2, screenY: 2 });
    trackArea.triggerEventHandler("mousemove", { screenX: 3, screenY: 3 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(2);

    tick(1200);
    fixture.detectChanges();
    trackArea.triggerEventHandler("mousemove", { screenX: 99, screenY: 99 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(3);

    fixture.destroy();
  }))
});
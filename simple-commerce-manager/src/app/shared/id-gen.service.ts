import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class IdGenService {
  private _counter$: FirebaseObjectObservable<number>;

  constructor(private af: AngularFire) {
    this._counter$ = this.af.database.object('/ids');
  }

  get(target: string): Observable<number> {
    return this._counter$.map(idContainer => idContainer[target] || 0);
  }

  update(target: string): Observable<number> {
    const idSubject: Subject<number> = new Subject();
    const id$ = idSubject.asObservable();
    this._counter$.$ref.transaction(this.inc(target), this.onComplete(target, idSubject));

    return id$;
  }

  private inc(target: string) {
    return function (idContainer) {
      if (idContainer) {
        idContainer[target] = (idContainer[target] || 0) + 1;
      } else {
        idContainer = {};
        idContainer[target] = 1;
      }
      return idContainer;
    };
  }

  private onComplete(target, idSubject: Subject<number>) {
    return function (err, comitted, dataSnapshot) {
      if (err) {
        throw new Error(`failed to increase counter of ${target}`);
      } else if (comitted) {
        const idContainer = dataSnapshot.val();
        idSubject.next(idContainer[target]);
        idSubject.complete();
      }
    };
  }

}

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FirebaseIdGeneratorService {
  private _globalIds: FirebaseObjectObservable<number>;

  constructor(private af: AngularFire) {
    this._globalIds = this.af.database.object('/ids');
  }

  getNewId(target: string): Observable<number> {
    const _idSubject: Subject<number> = new Subject();
    const _idObs = _idSubject.asObservable();
    this._globalIds.$ref.transaction(this._updateIdFn(target), this._onCompleteFn(target, _idSubject));

    return _idObs;
  }

  private _updateIdFn(target: string) {
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

  private _onCompleteFn(target, _idSubject: Subject<number>) {
    return function (err, comitted, dataSnapshot) {
      if (err) {
        throw new Error('failed to get new id');
      } else if (comitted) {
        const idContainer = dataSnapshot.val();
        _idSubject.next(idContainer[target]);
        _idSubject.complete();
      }
    };
  }

}

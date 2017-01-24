import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { FirebaseIdGeneratorService } from "../shared/firebase-id-generator.service";
import { Categories } from "./category.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CategoryService {
  private _category$: FirebaseListObservable<Categories>;

  constructor(private af: AngularFire,
              private idService: FirebaseIdGeneratorService) {
    this._category$ = af.database.list('/categories');
  }

  getCategories(pageSize, pageNo) {
    const offset = pageSize * (pageNo - 1) + 1;

    return this.af.database.list('/categories', {
      query: {
        orderByChild: 'id',
        startAt: offset,
        limitToFirst: pageSize
      }
    });
  }

  create(name: string) {
    return this.idService.getNewId('category')
      .switchMap(id => {
        const _key = this._category$.push({id: id, name: name, isUse: true}).key;
        return this.af.database.object('/category/' + _key).take(1);
      });
  }
}

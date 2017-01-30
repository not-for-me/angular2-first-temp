import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { IdGenService } from "../shared/id-gen.service";
import { Categories, Category } from "./category.model";
import { ItemPagingService } from "../shared/item-paging.service";

@Injectable()
export class CategoryService {
  categories$: FirebaseListObservable<Categories>;

  constructor(private af: AngularFire,
              private counterService: IdGenService) {
    this.categories$ = af.database.list('/categories');
  }

  create(name: string, desc: string) {
    return this.counterService.update('category')
      .map((id) => this.categories$.push(new Category(id, name, desc)).key)
      .switchMap($key => this.af.database.object(`/categories/${$key}`).take(1));
  }

  update(cat: Category) {
    const modifiedCat = Category.getNewForUpdate(cat);
    return this.categories$.update(cat.$key, modifiedCat);
  }

  count() {
    return this.counterService.get('category');
  }
}

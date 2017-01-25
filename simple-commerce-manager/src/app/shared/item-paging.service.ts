import { Observable } from "rxjs/Observable";

export abstract class ItemPagingService<T> {
  constructor() {
  }

  getListByDesc(pageNo, pageSize, totalCnt) {
    const offset = totalCnt - pageSize * (pageNo - 1);
    const option = {
      query: {
        orderByChild: 'id',
        endAt: offset,
        limitToLast: pageSize
      }
    };
    return this.getStream(option);
  }

  abstract getStream(option: any): Observable<T>
}

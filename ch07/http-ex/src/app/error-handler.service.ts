import { Injectable } from '@angular/core';

export const SEARCH_ERROR_MSG = '사용자 검색 실패';

@Injectable()
export class ErrorHandlerService {

  constructor() { }

  getApiErrorHandler() {
    return (err) => {
      let errMessage;
      if (err.hasOwnProperty('responseText')) {
        errMessage = err.responseText;
      } else if (err.hasOwnProperty('_body')) {
        errMessage = err._body;
      } else if (err instanceof Error) {
        errMessage = err.message;
      } else {
        errMessage = err;
      }
      alert(`검색 오류: ${errMessage}`);
    }
  }
}

import * as moment from 'moment';

export class ScmSharedUtil {
  static getCurrentDate() {
    return moment().format('YYYY-MM-DD');
  }

  static getCurrentDateTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
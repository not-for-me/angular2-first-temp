
import { ScmBaseModel } from "../shared/scm-base.model";
import { ScmSharedUtil } from "../shared/shared-util";

export declare type Categories = Category[];

export class Category extends ScmBaseModel {
  $key: string;
  id: number;
  name: string;
  desc: string;

  constructor(id: number, name: string, desc: string) {
    super(true, ScmSharedUtil.getCurrentDateTime(),  '');
    this.id = id;
    this.name = name;
    this.desc = desc;
  }

  static getNewForUpdate(other: Category) {
    return {
      id: other.id,
      name: other.name,
      desc: other.desc,
      isUse: other.isUse,
      createdTime: other.createdTime,
      updatedTime: ScmSharedUtil.getCurrentDateTime()
    };
  }
}

export class ScmBaseModel {
  $key?: string;
  protected isUse: boolean;
  protected createdTime: string;
  protected updatedTime: string;


  constructor(isUse: boolean, createdTime: string, updatedTime: string) {
    this.isUse = isUse;
    this.createdTime = createdTime;
    this.updatedTime = updatedTime;
  }
}

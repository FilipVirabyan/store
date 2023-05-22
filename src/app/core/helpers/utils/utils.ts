import {IProduct} from "@core/models";

export class Utils{
  public static trackByFn<T>(index:number, prod:T & { id:number }){
    return prod.id
  }
}

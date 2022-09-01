import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  /**
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
   */
  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(data: any){
        return JSON.stringify(data).toLowerCase().includes(args);
    });
}

}

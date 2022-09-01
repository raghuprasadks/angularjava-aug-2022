import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
/**
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
   */

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarColorEnabled',
})
export class CambiarColorEnabledPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value === 'Habilitado') {
      return '#008000';
    } else {
      return '#FF0000';
    }
    return value;
  }
}

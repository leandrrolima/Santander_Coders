import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]',
})
export class DateMaskDirective {
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    debugger;
    const input = event.target as HTMLInputElement;
    const value = input.value;

    const apenasNumeros = value.replace(/\D/g, ''); // [^0-9]

    if (apenasNumeros.length >= 3 && apenasNumeros.length < 5) {
      input.value = `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(2)}`;
      return;
    }

    if (apenasNumeros.length >= 5) {
      input.value = `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(
        2,
        4
      )}/${apenasNumeros.slice(4, 8)}`;
      return;
    }
  }

  constructor() {}
}

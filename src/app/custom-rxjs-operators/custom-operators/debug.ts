import { tap } from 'rxjs/operators';

/**
 * Custom operator from rxjs operator
 */
export function debug(tag: string) {
    return tap({
        next(value) {
          console.log(`%c[${tag}: Next]`, 'background: #009688; color: #fff; padding: 3px; font-size: 12px;', value);
        },
        error(error) {
          console.log(`%[${tag}: Error]`, 'background: #E91E63; color: #fff; padding: 3px; font-size: 12px;', error);
        },
        complete() {
          console.log(`%c[${tag}]: Complete`, 'background: #00BCD4; color: #fff; padding: 3px; font-size: 12px;');
        }
      });
}

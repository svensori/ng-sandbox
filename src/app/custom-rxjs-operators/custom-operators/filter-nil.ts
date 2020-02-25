import { Observable } from 'rxjs';


/**
 * Custom operator
 */
export function filterNilChoosy(filter: Array<any> = []) {
    return <T extends any>(source: Observable<T>): Observable<T> => {
        return new Observable(subscriber => {
            return source.subscribe({
                next(value) {
                    if (value !== undefined && value !== null) {
                        if (!filter.includes(value)) {
                            subscriber.next(value);
                        }
                    }
                },
                error(error) {
                    subscriber.error(error);
                },
                complete() {
                    subscriber.complete();
                }
            });
        });
    };
}

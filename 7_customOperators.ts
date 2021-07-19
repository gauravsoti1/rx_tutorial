import { Observable } from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';

/*
 returns a function which takes an Observable
 as parameter and returns an observable
*/
const customOperator = () => {
  return (source: Observable<any>): Observable<any> => {
    // here are custom operator is a mixture
    // of operators
    return source.pipe(
      filter((i: number) => i % 2 === 0),
      map((i) => i * 2),
      delay(5000)
    );
  };
};

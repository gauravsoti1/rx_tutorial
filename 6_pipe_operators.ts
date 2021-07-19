import { interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const producer = interval(1000);

producer.pipe(
  filter((i: number) => i % 2 === 0),
  map((i: number) => i * 2)
);

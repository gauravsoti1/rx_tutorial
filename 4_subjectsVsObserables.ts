import { interval, Observable, Subject, takeUntil, timer } from 'rxjs';

const producer = new Observable((subscriber) => {
  let i = 0;
  subscriber.next(i++);
  subscriber.next(i++);
  subscriber.next(i++);
});

producer.subscribe((val) => console.log('sub 1', val, process.hrtime()));
producer.subscribe((val) => console.log('sub 2', val, process.hrtime()));

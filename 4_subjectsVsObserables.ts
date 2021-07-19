import { interval, Subject, takeUntil, timer } from 'rxjs';

function subjectExample1() {
  const s = new Subject<number>();
  // process.hrtime returns [currTimeInSeconds, currTimeInNanoSeconds]
  s.subscribe((val) => console.log('sub 1 ', val, process.hrtime()));

  setTimeout(() => {
    s.subscribe((val) => console.log('sub 2 ', val, process.hrtime()));
  }, 500);

  console.log('nexting 1...');
  s.next(1);

  setTimeout(() => {
    console.log('nexting 2 ...');
    s.next(2);
  }, 1000);

  setTimeout(() => {
    console.log('nexting 3 ...');
    s.next(3);
  }, 2000);
}

function observableExample1() {
  const s = interval(1000);
  // process.hrtime returns [currTimeInSeconds, currTimeInNanoSeconds]
  s.subscribe((val) => console.log('sub 1 ', val, process.hrtime()));

  setTimeout(() => {
    s.subscribe((val) => console.log('sub 2 ', val, process.hrtime()));
  }, 500);
}

function observableExample2() {
  const s = interval(1000);
}

function subjectExample2() {
  const s = new Subject<number>();

  console.log('nexting 1...');
  s.next(1);

  setTimeout(() => {
    console.log('nexting 2 ...');
    s.next(2);
  }, 1000);

  setTimeout(() => {
    console.log('nexting 3 ...');
    s.next(3);
  }, 2000);
}

subjectExample2();

> Previous code wasn't declarative, so now the focus will be on declarative code

# Subject vs Observables

```typescript
  import { Subject } from 'rxjs';

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
  }, 1000);

  setTimeout(() => {
    console.log('nexting 3 ...');
    s.next(3);
  }, 2000);


```

Output: 
```
  sub 1  1 [ 7052, 355558136 ]
  nexting 2 ...
  sub 1  2 [ 7053, 359136086 ]
  sub 2  2 [ 7053, 359811729 ]
  nexting 3 ...
  sub 1  3 [ 7054, 359225462 ]
  sub 2  3 [ 7054, 359695300 ]

```
Inferences:
1. sub2 is initialized late, hence it doesn't receive value = 1
2. sub1 and sub2 which are subscriptions, receive values 2 and 3 at the same time 

Observable example:
```typescript
  const s = interval(1000)
  // process.hrtime returns [currTimeInSeconds, currTimeInNanoSeconds]
  s.subscribe((val) => console.log('sub 1 ', val, process.hrtime()));

  setTimeout(() => {
    s.subscribe((val) => console.log('sub 2 ', val, process.hrtime()));
  }, 500);

```
Output:
```
  sub 1  0 [ 7873, 587712579 ]
  sub 2  0 [ 7874, 88777692 ]
  sub 1  1 [ 7874, 587313274 ]
  sub 2  1 [ 7875, 88786728 ]
  sub 1  2 [ 7875, 588650294 ]
  sub 2  2 [ 7876, 89457998 ]
  sub 1  3 [ 7876, 588894680 ]
  sub 2  3 [ 7877, 90779269 ]
  sub 1  4 [ 7877, 589408549 ]
  sub 2  4 [ 7878, 90969587 ]

```
Now sub1 and sub2 have a 500ms difference while receiving updates
Observables are uni-cast
```typescript
  const s = interval(1000)
```
Nothing happens if we don't subscribe, interval doesn't run

> Subject creates only 1 stream which gets shared between the subscriptions

> Observables create new stream per subscription
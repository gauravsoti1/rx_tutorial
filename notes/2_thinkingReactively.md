Example 1:
```javascript
 a = 3
 b = 3
 c = a + b
 expect(c).toBe(6) // this will be true
 a = a + 1
 expect(c).toBe(7) // this will be false because c doesn't react to changes in a
```

Showcasing use of rxjs
```javascript
  const eventEmitter = new Subject();
  // separate consumer
  eventEmitter.subscribe(console.log);
  // separate producer
  eventEmitter.next('Hello World');
  eventEmitter.next('lalala allaa');

  
  /*
    Output:
    Hello world
    lalala allaa
  */
```

Solving example 1 in reactive way
```javascript
  import { combineLatest, Subject } from 'rxjs';
  test('value of c changes', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const c = combineLatest(a, b); //combines two observables
    // consumer
    // we are listening to combined observable
    c.subscribe(([valueA, valueB]) => console.log(valueA + valueB));

    // producer
    a.next(3);
    b.next(3);
    // changing the value of a
    a.next(4);
  });

```
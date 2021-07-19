## next, error, complete

functions available while creating
```typescript
  const stream = new Observable(consumer => {
    consumer.next(1);
    consumer.next(2);
    consumer.error('error message')
    consumer.complete()
})

```
Contract:
1. After error and complete observable finishes
2. You can't throw error after complete and vice-versa
3. Also you can't use next after the stream finishes


functions on subscriber:

```typescript

  strean.subscribe(onNext, onError, onComplete);

```

```typescript

  const onNext = val => console.log(`nexted: ${val}`);
  const onError = error => console.error(error)
  const onComplete = () => console.log('complete');

```

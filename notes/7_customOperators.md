# Custom Operators
1. They are a high order function
2. Return a function, about which:
   1. accepts an Observable as parameter 
   2. Returns an observable 

```typescript
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

```
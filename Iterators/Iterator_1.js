// An iterator that allows creation of a simple range iterator which defines a sequence of integers from start (inclusive) to end (exclusive) spaced step apart. Its final return value is the size of the sequence it created, tracked by the variable iterationCount. 


function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
  
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
    return rangeIterator;
  }

// Using the iterator then looks like this:

const iter = makeRangeIterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]


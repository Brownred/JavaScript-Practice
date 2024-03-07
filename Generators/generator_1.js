function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
      iterationCount++;
      yield i;
    }
    return iterationCount;
  }

  let iter = makeRangeIterator(1, 20, 2);
    let result = iter.next();
    console.log(result.value); // 1
    console.log(result.done);  // false

    while (!result.done) {
      console.log(result.value); // 3, 5, 7, 9, 11, 13, 15, 17, 19
      result = iter.next();
    }

    console.log("Iterated over sequence of size:", result.value);
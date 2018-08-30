const Fizzbuzz = () => {
  const arr = []
  for (let i = 1; i <= 100; ++i) {
    const val =
      i % 15 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
          ? 'Fizz'
          : i % 5 === 0
            ? 'Buzz'
            : i
    arr.push(val)
  }
  return arr
}

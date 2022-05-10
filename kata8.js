const repeatNumbers = function(data) {
  return (Array.isArray(data[0]) ? data : [data])
      .map(([value, length]) => Array.from({ length }, _ => value).join(''))
      .join(', ');
}



console.log(repeatNumbers("42, 7"));
console.log(repeatNumbers([[10, 2], [11,1]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[1, 4], [3, 6], [9, 2]]));
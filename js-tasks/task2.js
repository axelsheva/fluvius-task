/*
2. Есть массив [30, -5, 0, 10, 5].
Напишите функцию сортировки от наименьшего к наибольшему, результат [-5, 0, 5, 10, 30].
Не используйте стандартную функцию sort.
*/

const list = [30, -5, 0, 10, 5];

function mySort(list) {
  var len = list.length,
    minIndex;

  for (i = 0; i < len; i++) {
    minIndex = i;

    for (j = i + 1; j < len; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    if (i != minIndex) {
      const temp = list[i];
      list[i] = list[minIndex];
      list[minIndex] = temp;
    }
  }
}

mySort(list);

console.log(list); // [-5, 0, 5, 10, 30]

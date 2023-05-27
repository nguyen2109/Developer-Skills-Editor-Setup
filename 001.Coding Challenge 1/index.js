const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const result2 = `... ${arr[i]} ºC in ${i + 1} days`;
    result = result + result2;
  }
  console.log(result);
}

printForecast(data1);
printForecast(data2);

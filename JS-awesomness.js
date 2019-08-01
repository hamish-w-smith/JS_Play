// https://www.destroyallsoftware.com/talks/wat
// Gary Bernhardt from CodeMash 2012

0.1+0.2 === 0.3

9999999999999999

3 > 2
3 > 1
3 > 2 > 1
3 > 2 >= 1
2+1
"2"+1
"2"-1

[1]+[1]
typeof([1]+[1])
[]+{}
{}+[]
[]+[]
Array(16)
Array(16).join("wat"+1)
Array(16).join("wat"-1) + " Batman!"

const arr = [1,2,3,4]

mapped = arr.map((element) => element +1)

function thing(x) {
  x = x + 100
  return x
}

function doStuff(arr, thing) {
  const ans = arr.map(x => thing(x))
  return ans
}

doStuff(arr, thing)


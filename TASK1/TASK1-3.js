
function square(num) {
var  result = num * num//scope of variable was global. 
  return result
}

result = square(4)
result2 = square(2)
var subtracted = result - result2
console.log(subtracted)

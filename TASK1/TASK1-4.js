

var evenNumbers = []

function addEvensOnly(num) {
  if (num % 2 === 0)//Loop bracket wasnt given which cuased it to execute just 1st statement
  	{
    console.log(num, 'is even, adding!')
    evenNumbers.push(num)
	}
}

addEvensOnly(0)
addEvensOnly(1)
addEvensOnly(2)
addEvensOnly(3)
addEvensOnly(4)

console.log('even numbers: ', evenNumbers)

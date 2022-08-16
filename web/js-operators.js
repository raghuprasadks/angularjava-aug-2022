/**
 * Operators - Arithmetic,comparision,logical,assignment,bitwise
 */

console.log('Arithmetic')
// Arithmetic +,-,*,/,%,**,++,--

num1=100
num2=200
result = num1+num2
console.log("result of addition is ",result)
result = num1*num2

console.log(num1," * ",num2," = ",result)
result = num1-num2
//` backtick
console.log(`${num1} - ${num2} = ${result}`)

console.log("comparision operators")
// >,<,<=,>=,==,===,!=

n1=100
n2=150
n3=75
result = n1>n2
console.log(' n1>n2 ',result)
result = (n1==n2)
console.log(' n1==n2 ',result)
result = (n1!=n2)
console.log(' n1!=n2 ',result)
n4='100'
result  = n1==n4
//== checks for the value
console.log(' n1==n4 ',result)
result  = n1===n4
//== checks for the value and datatype
console.log(' n1===n4 ',result)
console.log("logical operators")
// &&,||,!
n1=100
n2=150
n3=75

console.log("n1<n2 && n2 > n3",(n1<n2) && (n2 > n3))
console.log("!(n1<n2 && n2 > n3)",!((n1<n2) && (n2 > n3)))
console.log("(n1>n2 || n2 > n3)",((n1>n2) || (n2 > n3)))

result = n2>n1?"greater":"lesser"
console.log(" result ",result)

sum = 10
sum = sum +10
console.log("sum is ",sum)
sum += 10
console.log("short hand += ",sum)

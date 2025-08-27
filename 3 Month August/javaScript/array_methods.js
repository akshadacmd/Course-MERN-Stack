//.map creates new array by performing opretion with same length

const a =[91,92,93,94,95]

const b = a.map((each)=>each*2)

console.log(b)

//.filter Returns a new array with elements that satisfy condition

const c = a.filter((each)=> each>80)

const e = a.filter((each)=> each>92)

console.log(c)
console.log(e)

//push add element in array 

a.push(450)
 
console.log(a)

//pop  removes end element 

a.pop()

console.log(a)

//== and ===
const x = 10;
const y ="10";

console.log(x == y)//check only value

console.log(x === y)//check both value and type 
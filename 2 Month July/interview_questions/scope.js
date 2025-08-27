var a =1000;   // 'var' is function/global scoped, not block-scoped 
{
var a=5000;
}
let b=a;// here 'a' is 5000, so b = 5000 
{
let b= 10000;// new block-scoped variable b (different from outer b) 
}
console.log(b);//in this it will give outer b value:5000
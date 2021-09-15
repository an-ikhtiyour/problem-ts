let a:number[]
let b:number[]
a = [1,2,3];
b = [4,2,5];
function list(){
 let newArray = a.concat(b);
 newArray.sort()
 console.log(newArray)
}
list()
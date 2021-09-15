var a;
var b;
a = [1, 2, 3];
b = [4, 2, 5];
function list() {
    var newArray = a.concat(b);
    newArray.sort();
    console.log(newArray);
}
list();

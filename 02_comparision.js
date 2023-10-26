// comparing two-different data-types


// for === conversion is not possible 

// string with a number
console.log("2">1); 

console.log("null">0);
// false = becoz in the null is converted into Nan;

console.log("null"==0);
// false = becoz in the null is converted into Nan;

console.log("null">=0);
// true = becoz in the null is converted into 0;



// first changing the data-types to similar for the comparision
let s = null;
let sn = Number(s);

console.log(sn);
// now we can say that sn = 0;
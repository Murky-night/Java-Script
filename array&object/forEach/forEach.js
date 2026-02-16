console.log("For Each");

const myClass = ['khang','nam','khoi'];
console.log(myClass[0]);

for (let i = 0; i < myClass.length; i++) {
    console.log("for i =",i,", name =", myClass[i]);
}
console.log("=======================");

for (let j = 1; j <= myClass.length; j++) {
    console.log("for i =",j,", name =", myClass[j - 1]);
}

console.log("=======================");

myClass.forEach((value, index) => {
    console.log("name =",value,"|| index =",index);
});
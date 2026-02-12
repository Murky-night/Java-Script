console.log("Break");

for (let i = 0; i < 10; i++) {
    console.log("i =",i);
    if (i === 2) {
        break;
    }
}

for (let j = 0; j < 10; j++) {
    if (j === 5) {
        continue;   
    }    
    console.log("j =",j);
}
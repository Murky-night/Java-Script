console.log("Map & Filter");

const scores = [10, 9, 8, 7, 6, 11, 12, 13, 15, 17]

const scoresx2 = scores.map(value => {
    return value * 2;
});

const checkScore = scores.filter(value => {
    return value % 2 === 0;
})

console.log("scores =", scores);;
console.log("scoresx2 =", scoresx2);
console.log("checkScore =", checkScore);
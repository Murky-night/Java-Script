const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2 with promise");
            resolve("done");
        }, 3000)
    })
}

const test = myPromise();
console.log("test",test);

console.log("1");
myPromise().then(data => {
    console.log("data:",data);
    console.log("3");
})
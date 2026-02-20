console.log("try try");

const divideByZero = () => {
    const a = 10;
    const b = 0;
    if (b === 0) {
        throw new Error("Divide over 0");
    }
    return a / b;
}

try {
    divideByZero();
} catch (error) {
    console.log(error);
} finally {
    console.log("Code running");
}
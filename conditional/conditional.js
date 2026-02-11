console.log("Conditional");

const final = 4;
if (final > 8) {
    console.log("Giỏi");
}
else if (final > 6 && final <= 8) {
    console.log("Khá");
}
else if (final > 4 && final <= 6) {
    console.log("Trung bình");
}
else {
    console.log("Yếu");
}


const score = 6;
switch (true) {
    case (score >= 8 && score <= 10):
        console.log("Giỏi");
        break;

    case (score >= 6 && score < 8):
        console.log("Khá");
        break;

    case (score >= 4 && score < 6):
        console.log("Trung bình");
        break;

    default:
        console.log("Yếu");
        break;
}
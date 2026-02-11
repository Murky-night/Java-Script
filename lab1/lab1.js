const fullName = "Nariyuki";
const birthYear = 2005;
const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const intro = `Name: ${fullName}
Age: ${currentYear - birthYear}
Student: ${isStudent}`

console.log(intro);
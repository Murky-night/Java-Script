console.log("Array");

const sv1 = {
    name: "Nam",
    age: 19
}

const sv2 = {
    name: "Khang",
    age: 18
}

const sinhvien = [sv1, sv2]
console.log(sinhvien);
console.log("Sv1 name:",sv1.name);
console.log("Sv1 before:",sv1);

sv1.address = "hanoi";
sv1.status = "have gf";
delete sv1.name;

console.log("Sv1 after:",sv1);


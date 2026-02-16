console.log("For-in");

const sv1 = {
    name: "Khang",
    age: 18,
    address: "Long Bien"
}

const sv2 = {
    name: "Lam",
    age: 19,
    address: "Ha Dong"
}

const sv3 = {
    name: "Nam",
    age: 20,
    address: "Cau Giay"
}

const sinhVien = [sv1, sv2, sv3];
console.log(sinhVien);

sinhVien.forEach((item,index) => {
    console.log("index =",index,"name =",item.name);
});

console.log("========================");

for (const key in sv1) {
    console.log(key,sv1[key]);
}

console.log("========================");

for (let item of Object.values(sv1)) {
    console.log(item);   
}


console.log("Labwork 2");

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const tinhTrungBinh = (a, b, c) => {
    return (a + b + c)/3
}

const myTrungBinh = tinhTrungBinh(diemToan, diemVan, diemAnh);

const xepLoai = (myTrungBinh) => {
    if (myTrungBinh >= 9 && myTrungBinh < 10) {
        return ("Xuất sắc");
    } else if (myTrungBinh >= 8 && myTrungBinh < 9) {
        return ("Giỏi");
    } else if (myTrungBinh >= 6.5 && myTrungBinh < 8) {
        return ("Khá");
    } else {
        return ("Trung bình");
    }
}

console.log(`
Điểm trung bình: ${myTrungBinh}
Xếp loại: ${xepLoai(myTrungBinh)}
    `);
